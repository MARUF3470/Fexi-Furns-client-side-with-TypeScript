/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Header from "../pages/sharedPages/Header";
import { PiBagBold } from "react-icons/pi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import CartDrawer from "../pages/drawer/CartDrawer";
import { AuthContext } from "../Authentication/AuthProvider";
import {
  useGetCartPItemsQuery,
  useGetProductQuery,
} from "../features/api/products/productApi";
import { useContext } from "react";
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
const Main = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = (): void => {
    setIsOpen((prevState) => !prevState);
  };
  const { user }: any = useContext(AuthContext);
  const query = {
    page: 0,
    size: 0,
    keyword: "",
  };
  const { data: ids = [] } = useGetCartPItemsQuery(user?.email);
  const { data } = useGetProductQuery(query);
  const cartItemIds = ids.map((id: { _id: string; id: string }) => id.id);
  const cartProducts = data?.products.filter((product: ProductType) =>
    cartItemIds?.includes(product._id)
  );
  const prices = cartProducts?.map((product: ProductType) => product.price);
  const totalprice = prices?.reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );
  return (
    <div>
      <Header />
      <div
        onClick={toggleDrawer}
        className="btn shadow-2xl hover:bg-slate-700 border-none rounded-sm w-20 h-20 pt-1 pb-2 bg-black fixed right-0 bottom-1/2 z-30"
      >
        <PiBagBold className="text-violet-400 text-xl" />
        <p className="text-xs lowercase text-white">
          {cartProducts?.length} items
        </p>
        <p className="bg-white p-1 text-slate-950 text-xs lowercase rounded-sm">
          {totalprice} price
        </p>
      </div>
      <Drawer
        open={isOpen}
        size={"350px"}
        onClose={toggleDrawer}
        direction="right"
      >
        <CartDrawer toggleDrawer={toggleDrawer}></CartDrawer>
      </Drawer>
    </div>
  );
};

export default Main;
