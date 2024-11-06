import React from "react";
import Green from "../../Image/greencircle.png";
import AboutRight from "../../Image/aboutright.png";

function About() {
  return (
    <>
      <div className="bg-about pt-[70px]">
        <h2 className="text-[#5647ff29] md:pl-[90px] pl-[40px] pb-[40px] md:text-[72px] text-[48px]">
          About Us
        </h2>
        <div className="md:flex justify-evenly">
          <div className=" md:w-[570px] ">
            <h5 className="text-[#ffffff] mb-[10px] text-[36px] flex">
              <img src={Green} className="" alt="" />{" "}
              <span className="ml-[-40px]">Safe Trade World</span>
            </h5>
            <p className="text-[#ccc7fb] mb-[20px] text-[16px]">
              Welcome to Safe Trade World, the premier destination for secure
              and seamless cryptocurrency trading. Our mission is to provide a
              world-class trading platform that is easy to use, secure, and
              reliable. We are committed to making cryptocurrency trading
              accessible to everyone, regardless of their level of experience.
            </p>
            <div className="flex items-center">
              <span className="text-[#8277ff] text-[16px]">STW</span>
            </div>
            <div className="mt-[10px]">
              <span className="text-[#ffffffe3] text-[16px]">OTHERS</span>
            </div>
          </div>
          <div>
            <img src={AboutRight} className="h-[370px] w-[459px]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
