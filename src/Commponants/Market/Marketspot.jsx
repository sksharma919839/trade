import React, { useState } from "react";
import mark from "../../Image/ii.png";

function Privacyspot() {
  const [activeTab, setActiveTab] = useState(0);
  const clickOnTab = (index) => {
    setActiveTab(index);
  };
  const cryItem = [
    {
      id: 0,
      name: "Pair",
    },
    {
      id: 1,
      name: "Last Price",
    },
    {
      id: 2,
      name: "24H Change",
    },
    {
      id: 3,
      name: "24H High",
    },
    {
      id: 4,
      name: "24H Low",
    },
    {
      id: 5,
      name: "24H Vol",
    },
    {
      id: 6,
      name: "24H Turnover",
    },
    {
      id: 7,
      name: "Operation",
    },
  ];

  return (
    <>
      <div>
        <div className="flex  items-center justify-center mb-[20px]">
          <ul className="flex items-center w-[87%] border-b border-b-[#86858d]">
            <li>
              <button
                className={
                  activeTab === 0
                    ? "text-[14px] text-[#ffffff] sm:w-[110px] w-[90px] h-[44px] text-center border-b border-b-[4px] border-b-[#10AA38]"
                    : "text-[14px] h-[44px] sm:w-[110px] w-[90px] text-center text-[#86858D]"
                }
                onClick={() => {
                  clickOnTab(0);
                }}
              >
                All
              </button>
            </li>
            <li>
              <button
                className={
                  activeTab === 1
                    ? "text-[14px] text-[#ffffff] sm:w-[110px] w-[90px] h-[44px] text-center border-b border-b-[4px] border-b-[#10AA38]"
                    : "text-[14px] h-[44px] sm:w-[110px] w-[90px] text-center text-[#86858D]"
                }
                onClick={() => {
                  clickOnTab(1);
                }}
              >
                INR
              </button>
            </li>
            <li>
              <button
                className={
                  activeTab === 2
                    ? "text-[14px] text-[#ffffff] sm:w-[110px] w-[90px] h-[44px] text-center border-b border-b-[4px] border-b-[#10AA38]"
                    : "text-[14px] h-[44px] sm:w-[110px] w-[90px] text-center text-[#86858D]"
                }
                onClick={() => {
                  clickOnTab(2);
                }}
              >
                USDT
              </button>
            </li>
          </ul>
        </div>
        <div>
          {activeTab === 0 && (
            <div className="mb-[80px]">
              <div className="cry-mk h-[380px] sm:mx-[79px] mx-[15px] rounded-2xl">
                <div className="flex items-center bg-[#212529] px-[79px] rounded-2xl">
                  <img
                    src={mark}
                    className="w-[34px] py-[8px] ml-[-50px]"
                    alt=""
                  />
                </div>
                <table className="flex items-center justify-center w-[100%]  overflow-x-scroll">
                  <tr className="cry-tr">
                    {cryItem.map((item) => (
                      <th
                        key={item.id}
                        className="text-[16px] text-[#ffffff] bg-[#24204b] py-[12px] pl-[20px] pr-[47px]"
                      >
                        <span>{item.name}</span>
                      </th>
                    ))}
                  </tr>
                </table>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="mb-[80px]">
              <div className="cry-mk h-[380px] sm:mx-[79px] mx-[15px] rounded-2xl">
                <div className="flex items-center bg-[#212529] px-[79px] rounded-2xl">
                  <img
                    src={mark}
                    className="w-[34px] py-[8px] ml-[-50px]"
                    alt=""
                  />
                </div>
                <table className="flex items-center justify-center w-[100%]  overflow-x-scroll">
                  <tr className="cry-tr">
                    {cryItem.map((item) => (
                      <th
                        key={item.id}
                        className="text-[16px] text-[#ffffff] bg-[#24204b] py-[12px] pl-[20px] pr-[47px]"
                      >
                        <span>{item.name}</span>
                      </th>
                    ))}
                  </tr>
                </table>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="mb-[80px]">
              <div className="cry-mk h-[380px] sm:mx-[79px] mx-[15px] rounded-2xl">
                <div className="flex items-center bg-[#212529] px-[79px] rounded-2xl">
                  <img
                    src={mark}
                    className="w-[34px] py-[8px] ml-[-50px]"
                    alt=""
                  />
                </div>
                <table className="flex items-center justify-center w-[100%]  overflow-x-scroll">
                  <tr className="cry-tr">
                    {cryItem.map((item) => (
                      <th
                        key={item.id}
                        className="text-[16px] text-[#ffffff] bg-[#24204b] py-[12px] pl-[20px] pr-[47px]"
                      >
                        <span>{item.name}</span>
                      </th>
                    ))}
                  </tr>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Privacyspot;
