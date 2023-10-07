import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="w-11/12 mx-auto lg:grid grid-cols-12 gap-8 my-10">
      <div className="col-span-3">
        <div className="bg-slate-100 pb-4 rounded-sm">
          <ul className="menu w-full py-5 ">
            <li className="hover-bordered">
              <Link to="/dashboard" className="w-full">
                Add Product
              </Link>
            </li>
            <li className="hover-bordered">
              <Link to="/dashboard/allproducts" className="w-full">
                Product List
              </Link>
            </li>
            <li className="hover-bordered">
              <Link to="/dashboard" className="w-full">
                Users
              </Link>
            </li>
          </ul>
          <Link to="/" className="text-sm hover:text-green-400">
            <p className="text-center">Back To Home</p>
          </Link>
        </div>
      </div>
      <div className="col-span-9 h-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
