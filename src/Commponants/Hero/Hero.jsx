import React from "react";
import Line from "../../Image/line.png";
import Top from "../../Image/topimg.png";

function Hero() {
  return (
    <div className="bg-[#1d1a2e] rounded-[6%] pb-[40px]">
      <div className="pt-[120px] flex items-center justify-center">
        <div className="w-[730px] h-[336px]">
          <h1 className="sm:text-[70px] text-[45px] font-thin text-[#ffffff]  text-center">
            India's Most Trusted Bitcoin & Cryptocurrency Exchange.
          </h1>
          <div className="home-row">
            <img
              src={Line}
              className="sm:mt-[-16px] mt-[-10px] sm:ml-[280px] ml-[80px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={Top} className="mt-[150px]" alt="" />
      </div>
    </div>
  );
}

export default Hero;
