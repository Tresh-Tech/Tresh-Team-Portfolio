import React from "react";
import blurredEllipse from "../assets/images/Ellipse1.png";

const HomePage = () => {
  return (
    <>
      <div className=" overflow-x-hidden w-full h-screen relative border  bg-gradient-to-b from-[#ffffff] to-[#1d4ed825]  border-black">
        <img
          src={blurredEllipse}
          alt=""
          width={225}
          height={225}
          className="absolute -top-12 -left-8 rotate-12"
        />
        <img
          src={blurredEllipse}
          alt=""
          width={225}
          height={225}
          className="absolute -top-12 -right-20 rotate-45"
        />
        <img
          src={blurredEllipse}
          alt=""
          className="absolute -bottom-12 -right-36 -rotate-75"
        />
      </div>
      <h2>Home</h2>
    </>
  );
};
// rgba(255, 255, 255, 0) ==> #fffffff
// #1d4ed825
//  https://freeconverts.com/rgba-to-hsl
// https://web-toolbox.dev/en/tools/color-converter
export default HomePage;
