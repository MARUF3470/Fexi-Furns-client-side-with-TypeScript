/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../../Authentication/AuthProvider";
import { useContext } from "react";
import {
  useGetCartPItemsQuery,
  useGetProductQuery,
  useDeleteCartItemsMutation,
} from "../../features/api/products/productApi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
type ToggleDrawerType = {
  toggleDrawer: () => void;
};
type ProductType = {
  [x: string]: any;
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  type: string;
  pictures: string;
};
const CartDrawer = ({ toggleDrawer }: ToggleDrawerType) => {
  const { user }: any = useContext(AuthContext);
  const query = {
    page: 0,
    size: 0,
    keyword: "",
  };
  const { data: ids = [] } = useGetCartPItemsQuery(user?.email);
  const { data } = useGetProductQuery(query);
  const [deleteCartItem] = useDeleteCartItemsMutation();
  const cartItemIds = ids?.map((id: { _id: string; id: string }) => id.id);
  const cartProducts = data?.products.filter((product: ProductType) =>
    cartItemIds?.includes(product._id)
  );
  const prices = cartProducts?.map((product: ProductType) => product.price);
  const totalprice = prices?.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
  return (
    <div className="w-full">
      <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
      <ul className="menu bg-base-100 text-base-content">
        <div className="border flex justify-between items-center py-3 shadow-md px-4">
          <h5 className="font-semibold">SHOPPING CART</h5>
          <motion.label
            onClick={toggleDrawer}
            whileHover={{ rotate: 60 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            htmlFor="my-drawer-4"
            className="drawer-button"
          >
            <IoMdClose className="w-8 h-8"></IoMdClose>
          </motion.label>
        </div>
        <div className="overflow-auto h-96">
          {cartProducts?.map((product: ProductType) => (
            <div
              className="flex justify-between items-center my-2 p-2 border-y-2"
              key={product._id}
            >
              <div>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className=" w-20 h-20">
                      <img
                        src={`https://fexi-furn-api.onrender.com/uploads/${product?.images[0]?.filename}`}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product?.name}</div>
                    <div className="text-sm">Price: ${product?.price}</div>
                    <div className="text-sm">Quantity: {product?.quantity}</div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    toast.success("Item removed from Cart");
                    deleteCartItem({ id: product?._id, email: user?.email });
                  }}
                  className="btn btn-ghost btn-xs"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between w-11/12 mx-auto my-2">
          <h4 className="font-bold text-lg">Subtotal:</h4>
          <p className="font-bold text-lg text-purple-700">${totalprice}</p>
        </div>
        <div className="w-11/12 mx-auto">
          <Link
            onClick={toggleDrawer}
            to="/cartItems"
            className="w-full btn btn-outline rounded-none"
          >
            View Cart
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default CartDrawer;
