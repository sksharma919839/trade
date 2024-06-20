import React from "react";
import Accourdion from "./Accourdion";
import Reviewslick from "./Reviewslick";
import Rating from "../../Image/images-removebg-preview.png";

function Review() {
  return (
    <>
      <div className="lg:flex  justify-evenly mt-[80px]">
        <div className="lg:w-[38%] ml-[20px] my-[20px]">
          <div>
            <h2 className="text-[#ffffff] font-bold text-[28px] mb-[5px]">
              Have a question? You’re covered.
            </h2>
            <p className="text-[16px] text-[#ffffff] review-p">
              Use customer data to build great and solid product experiences
              that convert.
            </p>
          </div>
          <div className="mt-[30px]">
            <Accourdion />
          </div>
        </div>
        <div className="lg:w-[38%]">
          <div>
            <h2 className="text-[#ffffff] text-[28px]">
              <strong>Testimonials -</strong> People are talking.
            </h2>
            <p className="text-[#ffffff] text-[16px]">
              Use customer data to build great and solid product experiences
              that convert.
            </p>
            <div className="bg-[#1f1d36] flex items-center my-[20px] w-[227px] h-36px justify-between">
              <span className="px-[10px] text-[14px] text-[#ccc7fb]">
                Average Rating{" "}
              </span>
              <img
                src={Rating}
                className="w-[94px] my-[10px] mx-[5px]"
                alt=""
              />
            </div>
            <div>
              <Reviewslick />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
