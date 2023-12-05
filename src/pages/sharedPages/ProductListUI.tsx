/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import {
  useDeleteCartItemsMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../../features/api/products/productApi";
import Loading from "../../component/reuseable/Loading/Loading";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
type MyValues = {
  quantity: number;
};
const ProductListUI = ({ product, handledelete, handleAddToCart }: any) => {
  const [quantity, setQuantity] = useState(1);
  const { user }: any = useContext(AuthContext);
  const { pathname } = useLocation();
  const [deleteProduct, { isLoading, isSuccess }] = useDeleteProductMutation();
  const [deleteCartItem] = useDeleteCartItemsMutation();
  const [updateProduct] = useUpdateProductMutation();
  const { handleSubmit, register } = useForm<MyValues>({
    defaultValues: {},
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isSuccess) {
    toast.success("Deleted Succesfully");
  }
  const handleQuantityUpdate = ({ quantity }: { quantity: number }) => {
    if (quantity > 0) {
      const data = { id: product._id, quantity };
      updateProduct(data);
      toast.success("Product Updated Succesfully");
    } else {
      const data = { id: product._id, quantity: 0 };
      updateProduct(data);
      toast.success("Product Updated Succesfully");
    }
  };
  return (
    <tr className="h-40 w-full">
      <td className="border">
        <div>
          <img
            className="w-40 h-full mx-auto"
            src={`https://fexi-furn-api.onrender.com/uploads/${product?.images[0]?.filename}`}
            alt=""
          />
        </div>
      </td>
      <td className="border">
        {product.name}
        <br />
        <span className="badge badge-ghost badge-sm">{product?.type}</span>
      </td>
      {pathname.includes("cartItems") && (
        <th className="border">
          <div className="border p-3 flex w-1/2 mx-auto">
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                } else {
                  toast.error("Quantity can not be less than 1");
                }
              }}
            >
              -
            </button>
            <div className="divider divider-horizontal"></div>
            <div>{quantity}</div>
            <div className="divider divider-horizontal"></div>
            <button
              onClick={() => {
                if (quantity < product.quantity) {
                  setQuantity(quantity + 1);
                } else {
                  toast.error(
                    "Quantity can not be greater than it's available stock"
                  );
                }
              }}
            >
              +
            </button>
          </div>
          <p className="text-center mt-2">
            Available Stock: {product.quantity}
          </p>
        </th>
      )}
      {pathname.includes("allproducts") && (
        <th className="rounded-none border bg-transparent text-center">
          <form onSubmit={handleSubmit(handleQuantityUpdate)}>
            <input
              type="text"
              placeholder="Type here"
              {...register("quantity")}
              className="input input-bordered w-3/4 lg:w-1/4 text-center text-xs"
              defaultValue={product.quantity}
            />
            <input
              type="submit"
              value="UPDATE"
              className="text-xs bg-violet-700 text-white hover:bg-black duration-300 px-2 py-1 ml-2"
            />
          </form>
        </th>
      )}
      {pathname.includes("wishlist") && (
        <th className="border ">
          <button
            onClick={() => handleAddToCart(product?._id)}
            className="w-full bg-black text-white hover:bg-violet-600 text-xs py-2"
          >
            ADD TO CART
          </button>
        </th>
      )}
      {pathname.includes("cartItems") && (
        <td className="border">{product.price * quantity}$</td>
      )}
      {pathname.includes("wishlist") && (
        <td className="border">{product.price}$</td>
      )}
      {pathname.includes("/cartItems") && (
        <td className="border">
          <div className="flex justify-center items-center">
            <Link
              to={`/payment/${product._id}?quantity=${quantity}&price=${product.price}`}
            >
              <input
                type="submit"
                value="Buy"
                className="btn rounded-sm bg-violet-700 text-white text-sm hover:bg-black"
              />
            </Link>
          </div>
        </td>
      )}
      <th className="border">
        {pathname.includes("allproducts") && (
          <button
            onClick={() => deleteProduct(product._id)}
            className="btn btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        {pathname.includes("wishlist") && (
          <button
            onClick={() => handledelete(product._id)}
            className="btn btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        {pathname.includes("cartItems") && (
          <button
            onClick={() => {
              toast.success("Item removed from cart");
              deleteCartItem({ id: product._id, email: user?.email });
            }}
            className="btn btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </th>
    </tr>
  );
};

export default ProductListUI;
