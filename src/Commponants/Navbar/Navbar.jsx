import React, { useState } from "react";
import Logo from "../../Image/logo.png";
import { NavLink, Link } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

function Nav() {
  const [Open, setOpen] = useState(false);
  const menuOn = () => {
    setOpen(!Open);
  };
  const navItem = [
    {
      id: 0,
      name: "Home",
      link: "/trade",
    },
    {
      id: 1,
      name: "Market",
      link: "/market",
    },
    {
      id: 2,
      name: "Trade",
      link: "/traded",
    },
    {
      id: 3,
      name: "Futures",
      link: "/future",
    },
  ];
  const respoItem = [
    {
      id: 0,
      name: "Home",
      link: "/trade",
    },
    {
      id: 1,
      name: "Market",
      link: "/market",
    },
    {
      id: 2,
      name: "Trade",
      link: "/traded",
    },
    {
      id: 3,
      name: "Funds",
      link: "/fund",
    },
    {
      id: 4,
      name: "Futures",
      link: "/future",
    },
  ];
  return (
    <>
      <nav className="fixed w-[100%] mt-[34px] bg-[#1d1a2e] z-[5] ">
        <div className="w-[100%]  flex items-center lg:justify-around justify-between   border-y border-y-[#ffffff77] py-[10px] sm:px-[40px] ">
          <div>
            <Link to="/traded">
              <img src={Logo} className="md:w-[130px] w-[100px]" alt="" />
            </Link>
          </div>
          <ul className="hidden lg:flex items-center justify-evenly">
            {navItem.map((item) => (
              <li key={item.id} className="mx-[25px]">
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[#8277ff] border-b border-[#5849FF] border-b-[2px]"
                        : "text-[#ffffff]"
                    } py-[7px] hover:text-[#8277ff]`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex  justify-evenly items-center">
            <div className="flex items-center justify-center bg-[#10aa38] rounded-3xl">
              <Link
                to="/signup"
                className="text-[14px] text-[#fff] md:py-[12px] py-[8px] pr-[17px] pl-[27px] border-r border-r-[#ffffff77]"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-[14px] text-[#fff] md:py-[12px] py-[8px] pl-[17px] pr-[27px]"
              >
                Login
              </Link>
            </div>
            {/* Responsive Navbar */}
            <div onClick={menuOn} className="mx-[20px] block lg:hidden">
              {Open ? (
                <AiOutlineClose size={25} className="text-[#ffffff]" />
              ) : (
                <RiMenu2Line size={25} className="text-[#ffffff]" />
              )}
            </div>
            <ul
              className={
                Open
                  ? "fixed lg:hidden left-0 top-0 w-[40%] h-full  bg-[#2d2b39] ease-in-out duration-500 "
                  : "ease-in-out w-[40%] duration-500 fixed top-0 bottom-0 left-[-100%]"
              }
            >
              <div className="py-[20px] px-[10px] border-b border-b-[#ffffff77] flex items-center ">
                <Link to="/traded">
                  <img src={Logo} className="w-[100px]" alt="" />
                </Link>
              </div>
              <div className="flex items-center ">
                <div>
                  {respoItem.map((items) => (
                    <li key={items.id} className="mx-[10px] my-[15px]">
                      <NavLink
                        to={items.link}
                        className={({ isActive }) =>
                          `${
                            isActive ? "text-[#8277ff] " : "text-[#ffffff]"
                          } py-[7px] text-[18px] hover:text-[#8277ff]`
                        }
                      >
                        {items.name}
                      </NavLink>
                    </li>
                  ))}
                </div>
              </div>
            </ul>
            {/* Responsive */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
