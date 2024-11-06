import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

function Traded() {
  return (
    <>
      <div className="flex items-center justify-center mt-[-40px] mx-[20px]">
        <div className="flex-wrap py-[10px] pl-[12px] pr-[20px]  bg-[#353341] h-auto flex items-center justify-evenly border rounded-3xl ">
          <p className="text-[#ffffffcc] pr-[10px]">
            Trade Spot and Futures with low fees, deep liquidity and get{" "}
            {"    "}
            Rewards
          </p>
          <a
            className="flex  items-center justify-between bg-[#10aa38] text-[14px] py-[5px] px-[20px] rounded-3xl text-[#ffffff]  "
            href="/traded"
          >
            Trade Now <IoIosArrowForward size={35} />
          </a>
        </div>
      </div>
      <div>
        <h2 className=" border-l-[#5849ff] text-[#ffffff] md:text-[36px] text-24px rounded font-bold pl-[30px]  mt-[60px] md:ml-[100px] ml-[40px]">
          <span>Earn daily rewards on your idle tokens</span>
        </h2>
        <p className="text-[#ffffff] text-[16px] md:ml-[100px] ml-[40px] mb-[80px] mt-[10px]">
          Simple & Secure. Search popular coins and start earning.
        </p>
      </div>
      <div>
        <div className="flex items-center justify-center mb-[70px]">
          <FaAngleDoubleLeft size={30} className="text-[#ffffff] mr-[30px]" />
          <FaAngleDoubleRight size={30} className="text-[#ffffff]" />
        </div>
      </div>
    </>
  );
}

export default Traded;
