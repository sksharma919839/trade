import React, { useState } from "react";

function Order() {
  const [activeTab, setActiveTab] = useState(0);
  const onClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="sm:w-[380px] w-[300px] lg:mt-0 mt-[30px] h-[520px] bg-[#1e1c2c] border border-[#54535d] rounded-lg">
        <div className="flex bg-[#5849ff] items-center h-[43px] rounded-lg justify-center">
          <h4 className="text-center  text-[18px] text-[#ffffff] ">
            Order Book
          </h4>
        </div>
        <div className="border-b-[#54535d] border-b">
          <button
            className={
              activeTab === 0
                ? "text-[14px] text-[#ffffff] py-[8px] px-[15px] w-[33%] border-b-[2px]"
                : "text-[14px] text-[#ffffff] py-[8px] px-[15px] w-[33%]"
            }
            onClick={() => onClick(0)}
          >
            All Orders
          </button>
          <button
            className={
              activeTab === 1
                ? "text-[14px] text-[#ffffff] py-[8px] w-[33%] px-[15px] border-b-[2px]"
                : "text-[14px] text-[#ffffff] py-[8px] w-[33%] px-[15px]"
            }
            onClick={() => onClick(1)}
          >
            Buy
          </button>
          <button
            className={
              activeTab === 2
                ? "text-[14px] text-[#ffffff] py-[8px] w-[33%] px-[15px] border-b-[2px]"
                : "text-[14px] text-[#ffffff] py-[8px] w-[33%] px-[15px]"
            }
            onClick={() => onClick(2)}
          >
            Sell
          </button>
        </div>
        <div>
          {activeTab === 0 && (
            <div className="flex pt-[10px]">
              <div className="text-[11px] w-[33%] pl-[5px] text-[#A6A6AC]">
                price()
              </div>
              <div className="text-[11px] w-[33%] text-[#A6A6AC]">
                Quantity()
              </div>
              <div className="text-[11px] w-[33%] text-[#A6A6AC]">
                Accumulated Volume()
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="flex pt-[10px]">
              <div className="text-[11px] w-[33%] text-[#A6A6AC]">price()</div>
              <div className="text-[11px] w-[33%] text-[#A6A6AC]">
                Quantity()
              </div>
              <div className="text-[11px] w-[33%] text-[#A6A6AC]">
                Accumulated Volume()
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="flex pt-[10px]">
              <div className="text-[11px] w-[33%] text-[#A6A6AC]">price()</div>
              <div className="text-[11px] w-[33%] text-[#A6A6AC]">
                Quantity()
              </div>
              <div className="text-[11px] w-[33%] text-[#A6A6AC]">
                Accumulated Volume()
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Order;
