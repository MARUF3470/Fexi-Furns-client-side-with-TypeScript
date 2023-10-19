import { useState } from "react";
import Header from "../pages/sharedPages/Header";
import { PiBagBold } from "react-icons/pi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import CartDrawer from "../pages/drawer/CartDrawer";

const Main = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = (): void => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <Header />
      <div
        onClick={toggleDrawer}
        className="btn shadow-2xl hover:bg-slate-700 border-none rounded-sm w-20 h-20 pt-1 pb-2 bg-black fixed right-0 bottom-1/2 z-30"
      >
        <PiBagBold className="text-violet-400 text-xl" />
        <p className="text-xs lowercase text-white">0 items</p>
        <p className="bg-white p-1 text-slate-950 text-xs lowercase rounded-sm">
          price
        </p>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <CartDrawer toggleDrawer={toggleDrawer}></CartDrawer>
      </Drawer>
    </div>
  );
};

export default Main;
