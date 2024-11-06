import React from "react";
import appl from "../../Image/ll.png";
import apple from "../../Image/Apple_logo_black.svg-removebg-preview.png";
import googlePlay from "../../Image/play-store-removebg-preview.png";
import qr from "../../Image/qr_code.png";
import { Link } from "react-router-dom";

function Apps() {
  return (
    <>
      <div className="h-[362px] mt-[180px] w-[100%] flex items-center bg-[#5849ff] justify-evenly">
        <div>
          <div>
            <h2 className="sm:text-[36px] text-[24px] text-[#ffffff]">
              Trade anytime, anywhere
            </h2>
            <p className="text-[#ffffffcc] text-[16px]">
              Scan to download, trade anytime and anywhere
            </p>
            <div className="md:flex  justify-evenly mt-[40px]">
              <Link
                to="/traded"
                className=" w-[210px] rounded-lg mx-[20px] md:mb-0 mb-[20px] flex items-center px-[40px] bg-[#ffffff] py-[10px]"
              >
                <img src={apple} className="w-[27px] h-[32px]" alt="" />
                <h6 className="text-[#212529] ml-[25px]">
                  <span className="text-[17.5px]">Download</span>{" "}
                  <b className="text-[20px]">App Store</b>
                </h6>
              </Link>
              <Link
                href="/traded"
                className=" w-[210px] rounded-lg mx-[20px] flex items-center px-[40px] bg-[#ffffff] py-[10px]"
              >
                <img src={googlePlay} className="w-[27px] w-[32px]" alt="" />
                <h6 className="text-[#212529] ml-[20px]">
                  <span className="text-[17.5px]">Download</span>{" "}
                  <b className="text-[20px]">Google Play</b>
                </h6>
              </Link>
              <div className="w-[109px] h-[120px] mx-[20px]  hidden rounded-lg cursor-pointer md:flex  items-center justify-center bg-[#ffffff]">
                <img src={qr} className="h-[40px] w-[40px]" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={appl}
            className="w-[460px] h-[562px] xl:block hidden"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Apps;
