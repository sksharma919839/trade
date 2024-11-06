import React, { useState } from "react";
import Chek from "../../Image/chek-removebg-preview.png";

function Openorder() {
  const [tab, setTab] = useState(0);
  const tabClick = (index) => {
    setTab(index);
  };
  return (
    <>
      <div className="sm:w-[550px] w-[300px] h-[224px] bg-[#1e1c2c] border border-[#54535d] rounded-lg">
        <div className="bg-[#5849ff] rounded-lg h-[40px] flex items-center justify-evenly">
          <div
            className={
              tab === 0
                ? "py-[8px] text-[#ffffff] cursor-pointer"
                : "text-[#ABA4FF] cursor-pointer py-[8px]"
            }
            onClick={() => tabClick(0)}
          >
            Open Orders
          </div>
          <div
            className={
              tab === 1
                ? "py-[8px] text-[#ffffff] cursor-pointer"
                : "text-[#aba4ff] cursor-pointer py-[8px]"
            }
            onClick={() => tabClick(1)}
          >
            Past Orders
          </div>
        </div>
        <div>
          {tab === 0 && (
            <div>
              <div className="flex items-center justify-center">
                <img src={Chek} className="h-[96px]" alt="" />
              </div>
              <div>
                <p className="text-[#ffffffcc] text-[16px] mt-[20px] text-center">
                  No Data Found.
                </p>
              </div>
            </div>
          )}
          {tab === 1 && (
            <div>
              <div className="flex items-center justify-center">
                <img src={Chek} className="h-[96px]" alt="" />
              </div>
              <div>
                <p className="text-[#ffffffcc] text-[16px] mt-[20px] text-center">
                  No Data Found.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Openorder;
