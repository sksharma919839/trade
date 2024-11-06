import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

function Header() {
  return (
    <>
      <header className="bg-[#1d1a2e] mx-auto flex items-center justify-center fixed w-[100%] z-[5]">
        <div className="flex items-center justify-between h-[34px] w-[90%]">
          <div className="flex items-center justify-evenly text-[#ffffff]">
            <a
              href="/trade"
              className="border-r border-l border-[#ffffff77] py-[9px] px-[14px] text-1 "
            >
              <FaFacebookF />
            </a>
            <a
              href="/trade"
              className="border-r border-l border-[#ffffff77] py-[9px] px-[14px] text-1 "
            >
              <FaTwitter />
            </a>
            <a
              href="/trade"
              className="border-r border-l border-[#ffffff77] py-[9px] px-[14px] text-1 "
            >
              <FaLinkedinIn />
            </a>
            <a
              href="/trade"
              className="border-r border-l border-[#ffffff77] py-[9px] px-[14px]  text-1 "
            >
              <CiInstagram />
            </a>
          </div>
          <div>
            <a className="text-[#fffffabf] text-[16px]" href="/trade">
              support@safetradeworld.com
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
