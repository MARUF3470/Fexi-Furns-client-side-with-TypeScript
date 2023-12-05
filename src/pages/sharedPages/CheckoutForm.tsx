/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import {
  useDeleteCartItemsMutation,
  usePaymentItemDetailsMutation,
} from "../../features/api/products/productApi";
import { AuthContext } from "../../Authentication/AuthProvider";
import { Link } from "react-router-dom";

const CheckoutForm = ({
  price,
  id,
  quantity,
}: {
  price: number;
  id: string;
  quantity: number;
}) => {
  const { user }: any = useContext(AuthContext);

  const [postPaymentDetails, { isSuccess }] = usePaymentItemDetailsMutation();
  const [deleteCartItems] = useDeleteCartItemsMutation();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionID, setTransactionID] = useState("");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://fexi-furn-api.onrender.com/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    // checking if it is a valid card or not
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      toast.error(error.message!);
    } else {
      console.log("payment method", paymentMethod);
    }

    setProcessing(true);
    //confirming card payment with confirmcardpayment api
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
      return toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900 uppercase">
                  {confirmError.decline_code}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {confirmError.message}
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    }

    setProcessing(false);
    if (paymentIntent?.status === "succeeded") {
      setTransactionID(paymentIntent?.id);
      // saving customer payment details to db
      const paymentDetails = {
        id: paymentIntent?.id,
        customerEmail: user?.email,
        OrderQuantity: quantity,
        paidAmount: price,
        productId: id,
        date: new Date(),
        orderStatus: "Service Pending",
      };
      postPaymentDetails(paymentDetails);
      deleteCartItems({ id: id, email: user?.email });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-3/4 lg:w-1/3 mx-auto my-10">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {!transactionID ? (
          <button
            type="submit"
            className="btn btn-primary btn-outline btn-sm mt-4"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        ) : (
          <p className="btn btn-disabled btn-outline btn-sm mt-4">Paid</p>
        )}
      </form>
      {transactionID && (
        <p className="text-center text-green-500 my-10">
          Payment succeeded, TransactionId:
          <span className="font-bold text-blue-700"> {transactionID}</span>
        </p>
      )}
      {isSuccess && (
        <div className="flex justify-center items-center my-10">
          <Link className="link" to="/orders">
            See your orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
