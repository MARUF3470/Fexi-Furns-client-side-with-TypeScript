/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineUser, AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { TbJewishStar } from "react-icons/tb";
import { motion } from "framer-motion";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SearchDrawer from "../drawer/SearchDrawer";
import Footer from "./Footer";
import { AuthContext } from "../../Authentication/AuthProvider";

const Header = () => {
  const { user, logout }: any = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = (): void => {
    setIsOpen((prevState) => !prevState);
  };
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch(() => {});
  };
  const dropdown = (
    <>
      {!user?.email ? (
        <li>
          <Link to={"/login"} className="text-slate-950">
            <AiOutlineLogin /> Login
          </Link>
        </li>
      ) : (
        <li>
          <button className="text-slate-950 font-medium" onClick={handleLogout}>
            <RiLogoutCircleLine /> LogOut
          </button>
        </li>
      )}
      <li>
        <Link to="/adminpage" className="text-slate-950">
          <MdOutlineAdminPanelSettings /> Admin Page
        </Link>
      </li>
      <li>
        <Link to="/wishlist" className="text-slate-950">
          <TbJewishStar /> WishList
        </Link>
      </li>
      <li>
        <Link to="/cartItems" className="text-slate-950">
          <BsBag />
          Cart
        </Link>
      </li>
    </>
  );
  const menu = (
    <>
      <li className="relative group w-fit">
        <Link
          to="/"
          className="text-black lg:text-white hover:text-slate-950 transition duration-500"
        >
          Home
        </Link>
        <span className="absolute hidden lg:block -bottom-1 left-0 w-0 h-0.5 bg-violet-950 transition-all duration-400 group-hover:w-full"></span>
      </li>
      <li className="relative group w-fit">
        <Link
          to="/about"
          className="text-black lg:text-white hover:text-slate-950 transition duration-500"
        >
          About
        </Link>
        <span className="absolute hidden lg:block -bottom-1 left-0 w-0 h-0.5 bg-violet-950 transition-all duration-400 group-hover:w-full"></span>
      </li>
      <li className="relative group w-fit">
        <Link
          to="/contact"
          className="text-black lg:text-white hover:text-slate-950 transition duration-500 "
        >
          Contact
        </Link>
        <span className="absolute hidden lg:block -bottom-1 left-0 w-0 h-0.5 bg-violet-950 transition-all duration-400 group-hover:w-full"></span>
      </li>
    </>
  );
  return (
    <div className="drawer block mx-auto w-[780px] lg:w-full">
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
            <div className="flex w-full items-center justify-center flex-row">
              <Drawer open={isOpen} onClose={toggleDrawer} direction="top">
                <SearchDrawer toggleDrawer2={toggleDrawer}></SearchDrawer>
              </Drawer>
              <BsSearch
                onClick={toggleDrawer}
                className="text-xl  text-slate-950 hover:text-violet-700 transition duration-300"
              />
              <div className="divider divider-horizontal"></div>
              <div className="dropdown">
                <label tabIndex={0}>
                  {user?.email ? (
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src={user?.photoURL} alt="user" />
                      </div>
                    </div>
                  ) : (
                    <AiOutlineUser className="text-xl text-slate-950 hover:text-violet-700 transition duration-300" />
                  )}
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
                >
                  {dropdown}
                </ul>
              </div>

              <div className="divider divider-horizontal"></div>
              <Link to="/cartItems">
                <BsBag className="text-xl text-slate-950 hover:text-violet-700 transition duration-300" />
              </Link>
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
        <Footer />
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
