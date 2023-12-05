import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../sharedPages/CheckoutForm";
import { useLocation, useParams } from "react-router-dom";
const stripePromise = loadStripe(
  `${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}`
);

const Payment = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const quantityParam = searchParams.get("quantity");
  const priceParam = searchParams.get("price");

  // Convert string parameters to numbers or set default values
  const quantity = quantityParam ? parseInt(quantityParam) : 0;
  const lprice = priceParam ? parseFloat(priceParam) : 0;

  // 2 decimel e convert kortasi
  const price = parseFloat(lprice.toFixed(2));
  const totalPrice = quantity * price;
  console.log(totalPrice);

  return (
    <div>
      <h1 className="text-center my-4">
        Please Provide Your Card Information for Payment
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={totalPrice} id={id!} quantity={quantity} />
      </Elements>
    </div>
  );
};

export default Payment;
