import React from "react";
import helloAnimation from "./animation_llb36um8.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
const AdminLandingPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-slate-950 first-letter mt-5">
        Wellcome Admin!
      </h1>
      <Lottie
        className="w-1/6 mx-auto"
        animationData={helloAnimation}
        loop={true}
      />
      <p className="text-center text-slate-950 my-3">
        This page is only available for admin. Admim have the ability to
        maintain the website. <br />
        You can create, update, delete a product and also handle the users by
        deleting their account or updating their role.
      </p>
      <div className="flex justify-center items-center mb-5">
        <Link
          to="/dashboard"
          className="hover:bg-black hover:border-black transition duration-500 border border-purple-700 px-8 py-3 text-white bg-purple-700 rounded-none text-xs"
        >
          GET STARTED
        </Link>
      </div>
    </div>
  );
};

export default AdminLandingPage;
