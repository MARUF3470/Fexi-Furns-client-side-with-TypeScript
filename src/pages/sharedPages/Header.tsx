import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { motion } from "framer-motion";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SearchDrawer from "../drawer/SearchDrawer";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = (): void => {
    setIsOpen((prevState) => !prevState);
  };
  const menu = (
    <>
      <li>
        <Link
          to="/"
          className="text-white hover:text-slate-950 transition duration-500"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-white hover:text-slate-950 transition duration-500"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="text-white hover:text-slate-950 transition duration-500"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="flex justify-around items-center py-5">
          <div className="flex items-center">
            <img
              className="w-16 h-16"
              src="https://t3.ftcdn.net/jpg/00/99/66/76/360_F_99667669_sGGg4m4wjdBngQm4cvUqY4rBImmYX9zG.jpg"
              alt=""
            />
            <h1>FEXI_FURNS</h1>
          </div>
          <div>
            <div className="flex w-full flex-row">
              <Drawer open={isOpen} onClose={toggleDrawer} direction="top">
                <SearchDrawer toggleDrawer2={toggleDrawer}></SearchDrawer>
              </Drawer>
              <BsSearch onClick={toggleDrawer} className="text-xl" />
              <div className="divider divider-horizontal"></div>
              <AiOutlineUser className="text-xl" />
              <div className="divider divider-horizontal"></div>
              <BsBag className="text-xl" />
            </div>
          </div>
        </div>
        <div className="w-full navbar bg-violet-500 shadow-md">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block mx-auto">
            <ul className="text-sm flex gap-4">{menu}</ul>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-1/2 h-full bg-base-200">
          <motion.label
            whileTap={{ scale: 1 }}
            htmlFor="my-drawer-3"
            className="btn btn-circle btn-outline"
          >
            <GrClose className="w-8 h-8"></GrClose>
          </motion.label>
          {menu}
        </ul>
      </div>
    </div>
  );
};

export default Header;
