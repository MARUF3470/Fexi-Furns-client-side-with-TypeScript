/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { useGetCartPItemsQuery } from "../../features/api/products/productApi";
import { AuthContext } from "../../Authentication/AuthProvider";
import { useLocation } from "react-router-dom";
import ProductListUI from "../sharedPages/ProductListUI";
import { useCart } from "../../hooks/useCart";
type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  type: string;
  pictures: string;
};
const CartItems = () => {
  const { pathname } = useLocation();
  const { user }: any = useContext(AuthContext);
  const { data: ids = [] } = useGetCartPItemsQuery(user?.email);
  const cartProducts = useCart(ids);
  return (
    <div>
      <div>
        {cartProducts?.length ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th className="rounded-none border bg-transparent">Image</th>
                <th className="border bg-transparent">Product</th>
                {pathname.includes("cart") ? (
                  <th className="rounded-none border bg-transparent">
                    Quantity
                  </th>
                ) : (
                  <th className="rounded-none border bg-transparent">
                    Add to Cart
                  </th>
                )}
                <th className="border bg-transparent">Price</th>
                {pathname.includes("cartItems") && (
                  <th className="border bg-transparent text-center">Buy</th>
                )}
                <th className="rounded-none border bg-transparent">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts?.map((product: ProductType) => (
                <ProductListUI key={product._id} product={product} />
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="text-center my-20">
            You didn't add any product to your wishlist
          </h1>
        )}
      </div>
    </div>
  );
};

export default CartItems;
