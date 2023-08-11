import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mb-20">
      <div className="text-center bg-slate-100 py-14">
        <h1 className="text-xl font-semibold text-slate-950">ABOUT US</h1>
        <p className="text-xs mt-3">
          <Link
            to="/"
            className="text-slate-950 hover:text-violet-700 transition duration-300"
          >
            HOME<span> </span>
          </Link>
          / ABOUT
        </p>
      </div>
      <div className="px-3">
        <h3 className="text-2xl font-bold text-center text-slate-950 lg:px-28 mt-20 mb-10">
          Furns is a global furniture destination for somethings. We sell
          cutting-edge furniture and offer a wide variety of fashion-related
          content.
        </h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <img
              className="h-96 w-full"
              src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Fabout%2F02.jpg&w=1080&q=75"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-96 w-full"
              src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Fabout%2F01.jpg&w=1080&q=75"
              alt=""
            />
          </div>
          <div className="text-slate-950 ">
            <div className="w-2/3 lg:relative lg:-right-52">
              <h4 className="text-lg">OUR STORES</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit
                amet conse ctetur adipisicing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="text-slate-950">
            <div className="w-2/3">
              <h4 className="text-lg">OUR MISSION</h4>
              <p className="text-xs">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit
                amet conse ctetur adipisicing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
