import React from "react";

const HomeProduct = () => {
  return (
    <div>
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-slate-950 mb-5">Our Product</h3>
        <p className="text-sm text-slate-950">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Animi
          nostrum repudiandae molestias rem nisi quis a eum corrupti porro
          optio!
        </p>
      </div>
      <div className="flex justify-center gap-4 my-10">
        <button className="text-slate-950 hover:text-violet-800 transition duration-500">
          New Arrival
        </button>
        <button className="text-slate-950 hover:text-violet-800 transition duration-500">
          Featured
        </button>
        <button className="text-slate-950 hover:text-violet-800 transition duration-500">
          Tending
        </button>
        <button className="text-slate-950 hover:text-violet-800 transition duration-500">
          On Sale
        </button>
      </div>
    </div>
  );
};

export default HomeProduct;
