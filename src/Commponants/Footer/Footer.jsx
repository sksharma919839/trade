import React from "react";
import logo from "../../Image/logo.png";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import appStore from "../../Image/app-store-removebg-preview.png";
import playStore from "../../Image/playstore-removebg-preview-removebg-preview.png";
import qrCode from "../../Image/qr_code.png";
import { NavLink, Link } from "react-router-dom";

const companyItems = [
  {
    id: 0,
    link: "/about",
    name: "About Us", 
  },
  {
    id: 1,
    link: "/contact",
    name: "Contact Us",
  },
  {
    id: 2,
    link: "/terms",
    name: "Terms Of Use",
  },
  {
    id: 3,
    link: "/kyc",
    name: "KYC Policy",
  },
  {
    id: 4,
    link: "/aml",
    name: "AML Policy",
  },
];
const contactItem = [
  {
    id: 0,
    link: "/privacy",
    name: "Privacy Policy",
  },
  {
    id: 1,
    link: "/traded",
    name: "support@safetradeworld.com",
  },
];
function Footer() {
  return (
    <>
      <div className="back-foot">
        <div className="lg:flex justify-evenly mb-[60px]">
          <div className="sm:w-[340px] mx-[20px] lg:px-0 sm:px-[20px] lg:mb-0 mb-[40px] h-[280px]">
            <Link to="/traded">
              <img src={logo} className="mb-[30px]" alt="" />
            </Link>
            <p className="text-[#ffffffbf] mb-[30px] text-[16px]">
              Thank you for your interest in Safe trades world! We're always
              happy to hear from our users and welcome your feedback, questions,
              and suggestions.
            </p>
            <div className="flex  sm:w-[320px] w-[240px] bg-[#393748] rounded-3xl item-center border border-[#393748]">
              <input
                type="email"
                name="email"
                className="bg-[#393748] rounded-3xl sm:px-[20px] py-[8px] text-[#ffffff77]"
                id="email"
                placeholder="Enter Your Email  Address"
              />
              <button
                type="summbit"
                className="footer-bt flex items-center rounded-3xl px-[10px] justify-between text-[#ffffff]"
              >
                <span>Send</span>
                <IoIosSend size={30} />
              </button>
            </div>
          </div>
          <div className="sm:flex lg:mb-0 mb-[40px] ">
            <div className="lg:mx-0 sm:mx-[50px] sm:mb-0 mb-[40px]">
              <h4 className="bg-[#1b192b] text-[18px] ml-[20px] mb-[30px] text-[#ffffff] py-[5px] pl-[23px] pr-[20px] w-[140px] rounded-l-lg border-l border-l-[6px] border-l-[#5849ff] rounded-e-3xl">
                Company
              </h4>
              <ul>
                {companyItems.map((item) => (
                  <li
                    key={item.id}
                    className="list-disc text-[25px] ml-[40px] mb-[5px] text-[#c049ff]"
                  >
                    <NavLink
                      className="text-[#ffffffbf] hover:text-[#5748FC] transition-all duration-500 hover:px-[5px] px-[15px] text-[14px]"
                      to={item.link}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:mx-0 sm:mx-[50px]">
              <h4 className="bg-[#1b192b] w-[105px] text-[18px] ml-[20px] mb-[30px] text-[#ffffff] py-[5px] pl-[23px] pr-[20px] rounded-l-lg border-l border-l-[6px] border-l-[#5849ff] rounded-e-3xl">
                Contact
              </h4>
              <ul>
                {contactItem.map((items) => (
                  <li
                    key={items.id}
                    className="list-disc text-[25px] ml-[40px] mb-[5px] text-[#c049ff]"
                  >
                    <NavLink
                      className="text-[#ffffffbf] hover:text-[#5748FC] transition-all duration-500 hover:px-[5px] px-[15px] text-[14px]"
                      to={items.link}
                    >
                      {items.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-[300px] sm:w-[400px] w-[300px]">
            <h4 className="bg-[#1b192b] w-[135px] text-[18px] ml-[20px] mb-[30px] text-[#ffffff] py-[5px] pl-[23px] pr-[20px] rounded-l-lg border-l border-l-[6px] border-l-[#5849ff] rounded-e-3xl">
              Follow Us
            </h4>
            <div className="flex items-center justify-evenly ml-[15px]">
              <div className="w-[40px] mx-[10px] h-10 transition-all cursor-pointer duration-500 hover:bg-[#3B5998] hover:mt-[-15px] bg-[#1b192b] rounded-lg flex items-center justify-center">
                <Link to="/traded" className=" text-[#ffffff]">
                  <FaFacebookF />
                </Link>
              </div>
              <div className="w-[40px] h-10 mx-[10px] transition-all cursor-pointer duration-500 hover:mt-[-15px] hover:bg-[#1DA1F2] bg-[#1b192b] rounded-lg flex items-center justify-center">
                <Link to="/traded" className=" text-[#ffffff]">
                  <FaTwitter />
                </Link>
              </div>
              <div className="w-[40px] h-10 mx-[10px] transition-all cursor-pointer duration-500 hover:mt-[-15px] hover:bg-[#0A66C2] bg-[#1b192b] rounded-lg flex items-center justify-center">
                <Link to="/traded" className=" text-[#ffffff]">
                  <FaLinkedin />
                </Link>
              </div>
              <div className="w-[40px] h-10 mx-[10px] transition-all cursor-pointer duration-500 hover:mt-[-15px] hover:bg-[#C32AA3] bg-[#1b192b] rounded-lg flex items-center justify-center">
                <Link to="/traded" className=" text-[#ffffff]">
                  <FaInstagram />
                </Link>
              </div>
              <div className="w-[40px] h-10 mx-[10px] transition-all cursor-pointer duration-500 hover:mt-[-15px] hover:bg-[#F20000] bg-[#1b192b] rounded-lg flex items-center justify-center">
                <Link to="/traded" className=" text-[#ffffff]">
                  <FaYoutube />
                </Link>
              </div>
            </div>
            <h4 className="bg-[#1b192b]  text-[18px] w-[180px] ml-[20px] my-[30px] text-[#ffffff] py-[5px] pl-[23px] pr-[20px] rounded-l-lg border-l border-l-[6px] border-l-[#5849ff] rounded-e-3xl">
              Download App
            </h4>
            <div className="flex items-center justify-evenly">
              <div>
                <img src={appStore} className="w-[130px]" alt="" />
                <div className="border w-[131px] rounded">
                  <img src={playStore} className="w-[130px]" alt="" />
                </div>
              </div>
              <div className="h-[110px] mt-[15px] w-[110px] bg-[#ffffff] flex items-center justify-center rounded-lg">
                <img src={qrCode} className="w-[90px] h-[90px]" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1b192b] text-[#8885a4] text-[12px] text-center w-[100%]">
          <p className="py-[15px]">
            Copyright © 2023 All Rights Reserved... Designed & developed by Dqot
            Solutions
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
