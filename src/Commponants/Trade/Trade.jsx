import React from "react";
import Order from "./Order";
import Buy from "./Buy";
import Openorder from "./Openorder";
import Recent from "./Recent";
import Asset from "./Asset";

function Trade() {
  return (
    <>
      <div className="pt-[122px] pb-[120px] ">
        <div className="lg:flex xl:mx-0 sm:mx-[50px] mx-[10px] justify-evenly">
          <div>
            <div className="sm:h-[80px] bg-[#1e1c2c] sm:w-[540px] border border-[#54535D] rounded-lg sm:flex items-center justify-between px-[20px]">
              <p className="text-[#ffffff] text-[28px]">Assest Info</p>
              <table className="flex items-center">
                <th className="text-[#ffffff] text-[14px] px-[10px]">
                  24h Change{" "}
                </th>
                <th className="text-[#ffffff] text-[14px] px-[10px]">
                  24h High{" "}
                </th>
                <th className="text-[#ffffff] text-[14px] px-[10px]">
                  24h Low{" "}
                </th>
                <th className="text-[#ffffff] text-[14px] px-[10px]">
                  24h Vol{" "}
                </th>
              </table>
            </div>
            <div className="sm:w-[540px] h-[430px] bg-[#1e1c2c] border border-[#54535d] rounded-lg mt-[10px]"></div>
          </div>
          <Order />
          <Buy />
        </div>
        <div className="mt-[20px] lg:flex sm:mx-[80px] mx-[10px] xl:mx-0 justify-evenly">
          <Openorder />
          <Recent />
          <Asset />
        </div>
      </div>
    </>
  );
}

export default Trade;
