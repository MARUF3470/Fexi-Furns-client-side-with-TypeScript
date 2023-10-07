import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="text-center bg-slate-100 py-14">
        <h1 className="text-xl font-semibold text-slate-950">CONTACT US</h1>
        <p className="text-xs mt-3">
          <Link
            to="/"
            className="text-slate-950 hover:text-violet-700 transition duration-300"
          >
            HOME<span> </span>
          </Link>
          / LOGIN
        </p>
      </div>
      <div>
        <form className="lg:w-1/3 mx-auto my-20 p-8 border">
          <label htmlFor="email" className="text-xs">
            Email <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input text-xs input-bordered w-full py-2 px-4 rounded-sm mt-3 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            />
          </label>
          <label htmlFor="password" className="text-xs">
            Password <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input text-xs input-bordered w-full py-2 px-4 rounded-sm mt-3 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
            />
          </label>
          <input
            type="submit"
            value="SIGNIN"
            className="btn rounded-sm mt-4 bg-violet-700 text-white text-sm w-full "
          />
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Link
              to={"/register"}
              className="btn text-xs w-full rounded-sm bg-slate-950 text-white"
            >
              CREATE NEW ACCOUNT
            </Link>
            <button className="btn text-xs w-full rounded-sm bg-slate-950 text-white hover:text-red-400">
              FORGET PASSWORD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
