import React from "react";
import mark from "../../Image/ii.png";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
function Crypto() {
  return (
    <>
      <div className="mt-[80px] ">
        <div className="md:flex items-center justify-between sm:px-[80px] px-[30px] pb-[30px]">
          <h2 className="text-[#ffffff] sm:text-[36px] text-[24px]">
            Popular Crypto Currencies
          </h2>
          <Link
            to="/market"
            className="crypto-a  flex items-center  justify-center py-[7px] px-[15px] rounded-3xl"
          >
            <span className="text-[#ffffff]">View more markets</span>
            <FaAngleDoubleRight className="text-[#ffffff] ml-[10px]" />
          </Link>
        </div>
        <div className="cry-mk h-[380px] sm:mx-[79px] mx-[15px] rounded-2xl">
          <div className="flex items-center bg-[#212529] px-[79px] rounded-2xl">
            <img src={mark} className="w-[34px] py-[8px] ml-[-50px]" alt="" />
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
    </>
  );
}

export default Crypto;
