import React from "react";
import cashLeft from "../../Image/cashleft.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Idea() {
  return (
    <>
      <div className="my-[100px] container ">
        <div className="md:flex items-center justify-around py-[20px] rounded-lg border border-[#ffffff77] lg:w-[1100px]  lg:mx-[82px]">
          <img src={cashLeft} alt="" />
          <h2 className="md:text-[36px] text-[24px] md:mb-[0] mb-[30px] flex-wrap text-[#ffffff]">
            <h2>Bring your ideas to life and</h2>{" "}
            <b>build your site visually.</b>
          </h2>
          <Link
            to="/future"
            className="flex w-[230px] items-center justify-evenly border bg-[#10aa38] border-[#10aa38] py-[5px] px-[15px] rounded-full"
          >
            <span className="text-[#ffffff] text-[16px]">STC Token</span>
            <div></div>
            <FaLongArrowAltRight
              size={50}
              className="text-[#ffffff] ml-[50px] border border-[#ffffff] rounded-[50%] py-[10px] px-[15px]"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Idea;
