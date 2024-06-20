import React from "react";

function Asset() {
  return (
    <>
      <div className="h-[181px] lg:mt-0 mt-[20px] w-[285px] bg-[#1e1c2c] border border-[#54535d] rounded-lg">
        <div className="h-[43px] bg-[#5849ff] rounded-lg text-[#ffffff] text-[18px] text-center py-[8px]">
          Asset
        </div>
        <div className="flex items-center justify-center my-[10px]">
          <div className="h-[45px] w-[252px] border border-[#54535d] flex items-center justify-between rounded-lg px-[15px]">
            <div className="text-[14px] text-[#ffffffe3]">Balance</div>
            <div className="text-[14px] text-[#ffffffe3]">0</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-[45px] w-[252px] border border-[#54535d] flex items-center justify-between rounded-lg px-[15px]">
            <div className="text-[14px] text-[#ffffffe3]">Balance</div>
            <div className="text-[14px] text-[#ffffffe3]">0</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Asset;
