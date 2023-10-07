import loadingAnimation from "./animation_llktslh1.json";
import Lottie from "lottie-react";
const Loading = () => {
  return (
    <Lottie
      className="w-1/2 mx-auto"
      animationData={loadingAnimation}
      loop={true}
    />
  );
};

export default Loading;
