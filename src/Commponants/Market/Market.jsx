import React, { useState } from "react";
import { Link } from "react-router-dom";
import BoxImg from "../../Image/chek-removebg-preview.png";
import Marketspot from "./Marketspot";

function Market() {
  const [activeTab, setActiveTab] = useState(1);
  const onTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="pt-[115px] ">
        <div className=" pt-[10px] bg-[#1d1a2e] rounded-b-[70px]">
          <div className="flex items-center justify-center mt-[10px] mb-[20px]">
            <h1 className="sm:text-[36px] text-[30px] text-center text-[#ffffff] border-b-[#5949ff] border-b  border-b-[6px] sm:w-[450px] w-[320px] rounded-3xl">
              Market Movers & Shakers
            </h1>
          </div>
          <div className="flex  items-center justify-center pb-[60px]">
            <div className="flex items-center h-[34px] rounded-3xl w-[200px] justify-center bg-[#010103] py-[5px] px-[15px]">
              <Link
                to="/trade"
                className="text-[#ffffffbf] text-16px hover:text-[#4337c2] transition-all duration-500 mr-[5px]"
              >
                Home
              </Link>{" "}
              <p className="text-[16px] text-[#ffffff]">// Market</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[130px] bg-[#0E0C1C]">
        <div className="flex items-center justify-center mb-[50px]">
          <ul className="flex w-[308px] h-[42px] border rounded-3xl border-[#4A4858]">
            <li>
              <button
                className={
                  activeTab === 0
                    ? " text-[16px] text-[#ffffff] bg-[#5849FF] w-[154px] h-[42px] border border-[#5849ff] rounded-3xl text-center"
                    : "text-[16px] text-[#ffffff] w-[154px] h-[42px] text-center"
                }
                onClick={() => onTabClick(0)}
              >
                Favorite
              </button>
            </li>
            <li>
              <button
                className={
                  activeTab === 1
                    ? " text-[16px] text-[#ffffff] bg-[#5849FF] w-[154px] h-[42px] border border-[#5849ff] rounded-3xl text-center"
                    : "text-[16px] text-[#ffffff] w-[154px] h-[42px] text-center"
                }
                onClick={() => onTabClick(1)}
              >
                Spot
              </button>
            </li>
          </ul>
        </div>
        <div>
          {activeTab === 0 && (
            <div className="flex  items-center justify-center mb-[100px]">
              <div className="w-[84%] h-[380px] py-[90px] rounded-xl border border-[#4a4858] bg-[#1E1C2C]">
                <div className="flex items-center justify-center">
                  <img className="w-[200px] h-[130px]" src={BoxImg} alt="" />
                </div>
                <p className="text-[15px] text-[#D1D1D4] text-center">
                  No results, Go to{" "}
                  <Link
                    to="/signup"
                    className="hover:text-[#5345EE] transition-all duration-300 text-[#C349FF] border-b border-b-[#C349FF] hover:border-b-[#5345ee]"
                  >
                    Sign in
                  </Link>{" "}
                  and add your favorite coins from Spot.
                </p>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <Marketspot />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Market;
