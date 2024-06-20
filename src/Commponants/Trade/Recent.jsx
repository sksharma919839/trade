import React from "react";

function Recent() {
  return (
    <>
      <div className="h-[490px] lg:mt-0 mt-[20px] sm:w-[360px] w-[300px] bg-[#1e1c2c] border border-[#54535d] rounded-lg">
        <div className="h-[43px] text-[18px] text-[#ffffff] py-[8px] bg-[#5849ff] rounded-lg text-center">
          Recent Trade
        </div>
        <div className="flex mt-[30px] px-[10px]">
          <div className="text-[11px] text-[#a6a6ac] w-[33%]">Price()</div>
          <div className="text-[11px] text-[#a6a6ac] w-[33%]">Quantity()</div>
          <div className="text-[11px] text-[#a6a6ac] w-[33%]">
            Accumulated Volume()
          </div>
        </div>
      </div>
    </>
  );
}

export default Recent;
