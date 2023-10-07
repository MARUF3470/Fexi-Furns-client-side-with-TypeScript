import React from "react";
import errorAnimation from "./animation_llku4we5.json";
import Lottie from "lottie-react";

const Error = () => {
  return (
    <Lottie
      className="w-1/2 mx-auto"
      animationData={errorAnimation}
      loop={true}
    />
  );
};

export default Error;
