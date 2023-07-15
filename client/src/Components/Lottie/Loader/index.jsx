import React from "react";
import Lottie from "lottie-react";
import LoaderLottie from "../../../Asset/Lottie/Loader/Loader.json";

const Loader = () => {
  return (
    <div className="mx-auto h-[600px] w-[600px]">
      <Lottie animationData={LoaderLottie} loop={true} />
    </div>
  );
};

export default Loader;
