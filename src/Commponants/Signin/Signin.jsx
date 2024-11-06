import React, { useState } from "react";
import loginleft from "../../Image/loginleft.png";
import { Link } from "react-router-dom";

function Signup() {
  const [activeTab, setActiveTab] = useState(0);
  const clickOnTab = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="pt-[160px] flex justify-center">
        <div className="w-[80%] rounded-xl">
          <div className="h-70px w-[100%] rounded-xl border border-[#676573] bg-[#373448] flex items-center justify-center">
            <div className="bg-[#0F0D1A] my-[15px] flex items-center justify-center rounded-3xl">
              <h1 className="text-[20px] text-[#ffffff] md:px-[120px] px-[30px] py-[5px]">
                <span className="font-bold">Sign Up:</span> Safe Trade World
              </h1>
            </div>
          </div>
          <div className="bg-[#1E1C2C] flex  border border-[#676573] rounded-xl mb-[60px]">
            <div className="w-[50%] lg:flex hidden border-r border-r-[#676573]  items-center justify-center">
              <img src={loginleft} alt="" />
            </div>
            <div className="lg:w-[50%] w-[100%] py-[40px] px-[30px]">
              <div className="flex items-center justify-center">
                <ul className="flex items-center justify-center border border-[#676573] sm:w-[300px] w-[240px] h-[42px] rounded-3xl mb-[40px]">
                  <li>
                    <button
                      className={
                        activeTab === 0
                          ? "text-[16px] sm:w-[150px] w-[120px] h-[42px] text-center bg-[#5940ff]   text-[#ffffff] border border-[#5940ff] rounded-3xl"
                          : "text-[16px] text-center sm:w-[150px] w-[120px] h-[42px] text-[#ffffff]"
                      }
                      onClick={() => {
                        clickOnTab(0);
                      }}
                    >
                      Mobile
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        activeTab === 1
                          ? "text-[16px] sm:w-[150px] w-[120px] h-[42px] text-center bg-[#5940ff]   text-[#ffffff] border border-[#5940ff] rounded-3xl"
                          : "text-[16px] text-center sm:w-[150px] w-[120px] h-[42px] text-[#ffffff]"
                      }
                      onClick={() => {
                        clickOnTab(1);
                      }}
                    >
                      Email
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                {activeTab === 0 && (
                  <div>
                    <div>
                      <form>
                        <legend className="text-[15px] mb-[10px] text-[#FAFAFA]">
                          Mobile
                        </legend>
                        <div>
                          <select
                            name="code"
                            id="code"
                            className="text-[14px] text-[#FFFFFF] rounded-3xl bg-[#393748] text-center mr-[20px] py-[12px] px-[20px] border border-[#676573]"
                          >
                            <option value="india">India (+91)</option>
                            <option value="uk">UK (+44)</option>
                            <option value="norway">Norway (+47)</option>
                            <option value="other">Other </option>
                          </select>
                          <input
                            type="text"
                            name="number"
                            id=""
                            placeholder="Enter mobile number"
                            className="text-[14px] sm:w-[60%] w-[97%] texxt-[#ffffff]  border border-[#676573] bg-[#393748] sm:mt-[0] mt-[20px] mb-[20px] py-[10px] px-[20px] rounded-3xl"
                          />
                        </div>
                        <div className="sm:flex items-center">
                          <div>
                            <legend className="text-[15px] mb-[10px] text-[#FAFAFA]">
                              First Name
                            </legend>
                            <input
                              type="text"
                              placeholder="First Name"
                              className="text-[14px]  w-[97%] texxt-[#ffffff]  border border-[#676573] bg-[#393748] sm:mt-[0] mt-[20px] mb-[20px] py-[10px] px-[20px] rounded-3xl"
                            />
                          </div>
                          <div>
                            <legend className="text-[15px] mb-[10px] text-[#FAFAFA]">
                              Last Name
                            </legend>
                            <input
                              type="text"
                              placeholder="Last Name"
                              className="text-[14px]  w-[97%] texxt-[#ffffff]  border border-[#676573] bg-[#393748] sm:mt-[0] mt-[20px] mb-[20px] py-[10px] px-[20px] rounded-3xl"
                            />
                          </div>
                        </div>
                        <div className="sm:flex items-center">
                          <div>
                            <legend className="text-[15px] mb-[10px] text-[#FAFAFA]">
                              Password
                            </legend>
                            <input
                              type="text"
                              placeholder="Your Password"
                              className="text-[14px]  w-[97%] texxt-[#ffffff]  border border-[#676573] bg-[#393748] sm:mt-[0] mt-[20px] mb-[20px] py-[10px] px-[20px] rounded-3xl"
                            />
                          </div>
                          <div>
                            <legend className="text-[15px] mb-[10px] text-[#FAFAFA]">
                              Confirm Password
                            </legend>
                            <input
                              type="text"
                              placeholder="Your Re-Password"
                              className="text-[14px]  w-[97%] texxt-[#ffffff]  border border-[#676573] bg-[#393748] sm:mt-[0] mt-[20px] mb-[20px] py-[10px] px-[20px] rounded-3xl"
                            />
                          </div>
                        </div>
                        <legend className="text-[15px] mb-[10px] text-[#FAFAFA]">
                          Invitation coode (Optional)
                        </legend>
                        <input
                          type="text"
                          placeholder="Plese enter invitation code"
                          className="text-[14px]  w-[97%] texxt-[#ffffff]  border border-[#676573] bg-[#393748] sm:mt-[0] mt-[20px] mb-[20px] py-[10px] px-[20px] rounded-3xl"
                        />
                        <div className="flex">
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="bg-[#393748] mr-[10px]"
                          />
                          <p className="text-[14px] text-[#C1C0C4]">
                            I agree to the{" "}
                            <Link
                              to="/terms"
                              className="text-[14px] text-[#c349ff] hover:text-[#5849FF]   transition-all duration-300 "
                            >
                              {" "}
                              User Agreement
                            </Link>{" "}
                            and
                            <Link
                              to="/privacy"
                              className="text-[14px] text-[#c349ff] hover:text-[#5849FF]  transition-all duration-300 "
                            >
                              {" "}
                              Privacy Policy
                            </Link>
                          </p>
                        </div>
                        <button className="contact-btn w-[100%] my-[30px] rounded-3xl cursor-pointer py-[8px] px-[30px] text-[16px] text-[#F0E7FF] mb-[20px]">
                          Sign Up
                        </button>
                        <div className="text-[14px] text-center text-[#C1C0C4]">
                          Already have account?{" "}
                          <Link
                            className="text-[14px] text-[#c349ff] hover:text-[#5849FF] border-b hover:border-b-[#5849FF] transition-all duration-300 border-b-[#c349ff]"
                            to="/login"
                          >
                            Sign in
                          </Link>{" "}
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                {activeTab === 1 && (
                  <div>
                    <div>
                      <form>
                        <legend className="text-[15px] mb-[10px] text-[#FAFAFA]">
                          Email
                        </legend>
                        <div>
                          <input
                            type="text"
                            name="number"
                            id=""
                            placeholder="Plese Enter Email"
                            className="text-[14px]  w-[97%] texxt-[#ffffff]  border border-[#676573] bg-[#393748] sm:mt-[0] mt-[20px] mb-[20px] py-[10px] px-[20px] rounded-3xl"
                          />
                        </div>
                        <div className="sm:flex items-center">
                          <div>
                            <legend className="text-[15px] mb-[10px] text-[#FAFAFA]">
                              First Name
                            </legend>
                            <input
                              type="text"
                              placeholder="First Name"
                              className="text-[14px]  w-[97%] texxt-[#ffffff]  border border-[#676573] bg-[#393748] sm:mt-[0] mt-[20px] mb-[20px] py-[10px] px-[20px] rounded-3xl"
                            />
                          </div>
                          <div>
                            <legend className="text-[15px] mb-[10px] text-[#FAFAFA]">
                              Last Name
                            </legend>
                            <input
                              type="text"
                              placeholder="Last Name"
                              className="text-[14px]  w-[97%] texxt-[#ffffff]  border border-[#676573] bg-[#393748] sm:mt-[0] mt-[20px] mb-[20px] py-[10px] px-[20px] rounded-3xl"
                            />
                          </div>
                        </div>
                        <div className="sm:flex items-center">
                          <div>
                            <legend className="text-[15px] mb-[10px] text-[#FAFAFA]">
                              Password
                            </legend>
                            <input
                              type="text"
                              placeholder="Your Password"
                              className="text-[14px]  w-[97%] texxt-[#ffffff]  border border-[#676573] bg-[#393748] sm:mt-[0] mt-[20px] mb-[20px] py-[10px] px-[20px] rounded-3xl"
                            />
                          </div>
                          <div>
                            <legend className="text-[15px] mb-[10px] text-[#FAFAFA]">
                              Confirm Password
                            </legend>
                            <input
                              type="text"
                              placeholder="Your Re-Password"
                              className="text-[14px]  w-[97%] texxt-[#ffffff]  border border-[#676573] bg-[#393748] sm:mt-[0] mt-[20px] mb-[20px] py-[10px] px-[20px] rounded-3xl"
                            />
                          </div>
                        </div>
                        <legend className="text-[15px] mb-[10px] text-[#FAFAFA]">
                          Invitation coode (Optional)
                        </legend>
                        <input
                          type="text"
                          placeholder="Plese enter invitation code"
                          className="text-[14px]  w-[97%] texxt-[#ffffff]  border border-[#676573] bg-[#393748] sm:mt-[0] mt-[20px] mb-[20px] py-[10px] px-[20px] rounded-3xl"
                        />
                        <div className="flex">
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="bg-[#393748] mr-[10px]"
                          />
                          <p className="text-[14px] text-[#C1C0C4]">
                            I agree to the{" "}
                            <Link
                              to="/terms"
                              className="text-[14px] text-[#c349ff] hover:text-[#5849FF]   transition-all duration-300 "
                            >
                              {" "}
                              User Agreement
                            </Link>{" "}
                            and
                            <Link
                              to="/privacy"
                              className="text-[14px] text-[#c349ff] hover:text-[#5849FF]  transition-all duration-300 "
                            >
                              {" "}
                              Privacy Policy
                            </Link>
                          </p>
                        </div>
                        <button className="contact-btn w-[100%] my-[30px] rounded-3xl cursor-pointer py-[8px] px-[30px] text-[16px] text-[#F0E7FF] mb-[20px]">
                          Sign Up
                        </button>
                        <div className="text-[14px] text-center text-[#C1C0C4]">
                          Already have account?{" "}
                          <Link
                            className="text-[14px] text-[#c349ff] hover:text-[#5849FF] border-b hover:border-b-[#5849FF] transition-all duration-300 border-b-[#c349ff]"
                            to="/login"
                          >
                            Sign in
                          </Link>{" "}
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
