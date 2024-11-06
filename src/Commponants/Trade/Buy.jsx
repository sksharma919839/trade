import React, { useState } from "react";
import { Link } from "react-router-dom";

function Buy() {
  const [activeTab, setActiveTab] = useState(0);
  const onClick = (index) => {
    setActiveTab(index);
  };

  const [tab, setTab] = useState(0);
  const clickTab = (index) => {
    setTab(index);
  };
  return (
    <>
      <div className="h-[520px] lg:mt-0 mt-[20px] bg-[#1e1c2c] w-[290px] border-[#54535d] border rounded-lg">
        <div className="px-[18px] py-[20px]">
          <div className="flex items-center justify-evenly">
            <button
              className={
                activeTab === 0
                  ? "text-[16px] text-[#ffffff] bg-[#10aa38] w-[118px] h-[40px] rounded-lg"
                  : "text-[16px] text-[#ffffff] bg-transparent w-[118px] h-[40px] rounded-lg border"
              }
              onClick={() => onClick(0)}
            >
              Buy
            </button>
            <button
              className={
                activeTab === 1
                  ? "text-[16px] text-[#ffffff] bg-[#ff6c61] w-[118px] h-[40px] rounded-lg"
                  : "text-[16px] text-[#ffffff] bg-transparent w-[118px] h-[40px] rounded-lg border"
              }
              onClick={() => onClick(1)}
            >
              Sell
            </button>
          </div>
          <div>
            {activeTab === 0 && (
              <div>
                <div className="flex items-center justify-center">
                  <select
                    name="limit"
                    id=""
                    className="h-[44px] w-[240px] bg-[#1e1c2c] rounded-lg buy-select my-[20px] text-[#ffffff]"
                  >
                    <option value="Limit">Limit</option>
                    <option value="Market">Market</option>
                  </select>
                </div>
                <div className="mt-[20px]">
                  <div className="flex w-[248px] h-[40px] rounded-lg ">
                    <legend className="w-[76px] h-[40px] py-[10px] text-center text-[#ffffffe3] bg-[#565560] rounded-lg text-[11.2px]">
                      At Price
                    </legend>{" "}
                    <input
                      type="number"
                      className="w-[172px] h-[40px] bg-transparent text-[#ffffffe3] border border-[2px] px-[10px] rounded-lg border-[#565560]"
                    />
                  </div>
                  <div className="flex w-[248px] h-[40px] my-[10px] rounded-lg ">
                    <legend className="w-[76px] h-[40px] py-[10px] text-center text-[#ffffffe3] bg-[#565560] rounded-lg text-[11.2px]">
                      Amount
                    </legend>{" "}
                    <input
                      type="number"
                      className="w-[172px] h-[40px] bg-transparent text-[#ffffffe3] border border-[2px] px-[10px] rounded-lg border-[#565560]"
                    />
                  </div>
                  <div className="flex w-[248px] h-[40px] rounded-lg ">
                    <legend className="w-[76px] h-[40px] py-[10px] text-center text-[#ffffffe3] bg-[#565560] rounded-lg text-[11.2px]">
                      Total
                    </legend>{" "}
                    <input
                      type="number"
                      className="w-[172px] h-[40px] bg-transparent text-[#ffffffe3] border border-[2px] px-[10px] rounded-lg border-[#565560]"
                    />
                  </div>
                </div>
                <div className="mt-[30px]">
                  <button
                    className={
                      tab === 0
                        ? "text-[12px] text-[#ffffff] text-center bg-[#10aa38] rounded-lg py-[10px] px-[15px] ml-[5px]"
                        : "border border-[#54535d] text-[12px] rounded-lg text-[#ffffff] text-center py-[10px] px-[15px] ml-[5px]"
                    }
                    onClick={() => clickTab(0)}
                  >
                    25%
                  </button>
                  <button
                    className={
                      tab === 1
                        ? "text-[12px] text-[#ffffff] text-center bg-[#10aa38] rounded-lg py-[10px] px-[15px] mx-[5px]"
                        : "border border-[#54535d] text-[12px]  rounded-lg text-[#ffffff] text-center py-[10px] px-[15px] mx-[5px]"
                    }
                    onClick={() => clickTab(1)}
                  >
                    50%
                  </button>
                  <button
                    className={
                      tab === 2
                        ? "text-[12px] text-[#ffffff] text-center bg-[#10aa38] rounded-lg py-[10px] px-[15px] mx-[0px]"
                        : "border border-[#54535d] text-[12px] rounded-lg text-[#ffffff] text-center py-[10px] px-[15px] mx-[0px]"
                    }
                    onClick={() => clickTab(2)}
                  >
                    75%
                  </button>
                  <button
                    className={
                      tab === 3
                        ? "text-[12px] text-[#ffffff] text-center bg-[#10aa38] rounded-lg py-[10px] px-[15px] mx-[5px]"
                        : "border border-[#54535d] text-[12px] rounded-lg text-[#ffffff] text-center py-[10px] px-[15px] mx-[5px]  "
                    }
                    onClick={() => clickTab(3)}
                  >
                    100%
                  </button>
                </div>
                <div className="mt-[20px]">
                  <button className="w-[248px] h-[40px] bg-[#10aa38] rounded-lg text-[#ffffff] text-[16px]">
                    <Link
                      to="/login"
                      className="text-[#BFE8CA] hover:text-[#3F54BA] transition-all duration-500"
                    >
                      Login
                    </Link>{" "}
                    or
                    <Link
                      to="/signup"
                      className="text-[#BFE8CA] hover:text-[#3F54BA] transition-all duration-500"
                    >
                      {" "}
                      Signup
                    </Link>
                  </button>
                </div>
                <div className="mt-[10px]">
                  <p className="text-[10.36px]  text-[#ffffffe3] text-center">
                    Fee: Maker: 0.2% | Taker: 0.2% | Incl. of all
                  </p>
                  <p className="text-[10.36px]  text-[#ffffffe3] text-center">
                    applicable taxes
                  </p>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <div className="flex items-center justify-center">
                  <select
                    name="limit"
                    id=""
                    className="h-[44px] w-[240px] bg-[#1e1c2c] rounded-lg buy-select my-[20px] text-[#ffffff]"
                  >
                    <option value="Limit">Limit</option>
                    <option value="Market">Market</option>
                  </select>
                </div>
                <div className="mt-[20px]">
                  <div className="flex w-[248px] h-[40px] rounded-lg ">
                    <legend className="w-[76px] h-[40px] py-[10px] text-center text-[#ffffffe3] bg-[#565560] rounded-lg text-[11.2px]">
                      At Price
                    </legend>{" "}
                    <input
                      type="number"
                      className="w-[172px] h-[40px] bg-transparent text-[#ffffffe3] border border-[2px] px-[10px] rounded-lg border-[#565560]"
                    />
                  </div>
                  <div className="flex w-[248px] h-[40px] my-[10px] rounded-lg ">
                    <legend className="w-[76px] h-[40px] py-[10px] text-center text-[#ffffffe3] bg-[#565560] rounded-lg text-[11.2px]">
                      Amount
                    </legend>{" "}
                    <input
                      type="number"
                      className="w-[172px] h-[40px] bg-transparent text-[#ffffffe3] border border-[2px] px-[10px] rounded-lg border-[#565560]"
                    />
                  </div>
                  <div className="flex w-[248px] h-[40px] rounded-lg ">
                    <legend className="w-[76px] h-[40px] py-[10px] text-center text-[#ffffffe3] bg-[#565560] rounded-lg text-[11.2px]">
                      Total
                    </legend>{" "}
                    <input
                      type="number"
                      className="w-[172px] h-[40px] bg-transparent text-[#ffffffe3] border border-[2px] px-[10px] rounded-lg border-[#565560]"
                    />
                  </div>
                </div>
                <div className="mt-[30px]">
                  <button
                    className={
                      tab === 0
                        ? "text-[12px] text-[#ffffff] text-center bg-[#ff6c61] rounded-lg py-[10px] px-[15px] ml-[5px]"
                        : "border border-[#54535d] text-[12px] rounded-lg text-[#ffffff] text-center py-[10px] px-[15px] ml-[5px]"
                    }
                    onClick={() => clickTab(0)}
                  >
                    25%
                  </button>
                  <button
                    className={
                      tab === 1
                        ? "text-[12px] text-[#ffffff] text-center bg-[#ff6c61] rounded-lg py-[10px] px-[15px] mx-[5px]"
                        : "border border-[#54535d] text-[12px]  rounded-lg text-[#ffffff] text-center py-[10px] px-[15px] mx-[5px]"
                    }
                    onClick={() => clickTab(1)}
                  >
                    50%
                  </button>
                  <button
                    className={
                      tab === 2
                        ? "text-[12px] text-[#ffffff] text-center bg-[#ff6c61] rounded-lg py-[10px] px-[15px] mx-[0px]"
                        : "border border-[#54535d] text-[12px] rounded-lg text-[#ffffff] text-center py-[10px] px-[15px] mx-[0px]"
                    }
                    onClick={() => clickTab(2)}
                  >
                    75%
                  </button>
                  <button
                    className={
                      tab === 3
                        ? "text-[12px] text-[#ffffff] text-center bg-[#ff6c61] rounded-lg py-[10px] px-[15px] mx-[5px]"
                        : "border border-[#54535d] text-[12px] rounded-lg text-[#ffffff] text-center py-[10px] px-[15px] mx-[5px]  "
                    }
                    onClick={() => clickTab(3)}
                  >
                    100%
                  </button>
                </div>
                <div className="mt-[20px]">
                  <button className="w-[248px] h-[40px] bg-[#ff6c61] rounded-lg text-[#ffffff] text-[16px]">
                    <Link
                      to="/login"
                      className="text-[#BFE8CA] hover:text-[#3F54BA] transition-all duration-500"
                    >
                      Login
                    </Link>{" "}
                    or
                    <Link
                      to="/signup"
                      className="text-[#BFE8CA] hover:text-[#3F54BA] transition-all duration-500"
                    >
                      {" "}
                      Signup
                    </Link>
                  </button>
                </div>
                <div className="mt-[0px]">
                  <p className="text-[10.36px]  text-[#ffffffe3] text-center">
                    Fee: Maker: 0.2% | Taker: 0.2% | Incl. of all
                  </p>
                  <p className="text-[10.36px]  text-[#ffffffe3] text-center">
                    applicable taxes
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Buy;
