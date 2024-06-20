import React from "react";

function Contact() {
  return (
    <>
      <div className="pt-[160px] flex justify-center">
        <div className="w-[80%] rounded-xl">
          <div className="h-70px w-[100%] rounded-xl border border-[#676573] bg-[#373448] flex items-center justify-center">
            <div className="bg-[#0F0D1A] my-[15px] flex items-center justify-center rounded-3xl">
              <h1 className="text-[20px] text-[#ffffff] md:px-[120px] px-[30px] py-[5px]">
                Contact Us
              </h1>
            </div>
          </div>
          <div className="bg-[#1E1C2C] border border-[#676573] rounded-xl mb-[60px]">
            <form className="py-[40px] lg:mx-[100px] md:mx-[50px] mx-[40px]">
              <div className="md:flex justify-evenly items-center mb-[30px]">
                <div className="w-[100%]">
                  <legend className="text-[#FBFBFC] text-[15px] mb-[8px]">
                    Enter Your Name
                  </legend>
                  <input
                    className="bg-[#393748] px-[20px] py-[8px] rounded-3xl border border-[#7A7073] w-[95%]"
                    type="name"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="w-[100%]">
                  <legend className="text-[#FBFBFC] text-[15px] mb-[8px]">
                    Enter Email Address
                  </legend>
                  <input
                    className="bg-[#393748] px-[20px] py-[8px] rounded-3xl border border-[#7A7073] w-[95%]"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
              </div>
              <div className="md:flex items-center justify-evenly  mb-[30px]">
                <div className="w-[100%]">
                  <legend className="text-[#FBFBFC] text-[15px] mb-[8px]">
                    Enter Phone Number
                  </legend>
                  <input
                    className="bg-[#393748] px-[20px] py-[8px] rounded-3xl border border-[#7A7073] w-[95%]"
                    type="number"
                    name="number"
                    id="number"
                  />
                </div>
                <div className="w-[100%]">
                  <legend className="text-[#FBFBFC] text-[15px] mb-[8px]">
                    Enter Subject
                  </legend>
                  <input
                    className="bg-[#393748] px-[20px] py-[8px] rounded-3xl border border-[#7A7073] w-[95%]"
                    type="text"
                    name="text"
                    id="text"
                  />
                </div>
              </div>
              <div className="md:flex justify-center items-center">
                <div className="w-[100%]">
                  <legend className="text-[#FBFBFC] text-[15px] mb-[8px]">
                    Enter Your Message
                  </legend>
                  <textarea
                    className="bg-[#393748] py-[8px] px-[20px] rounded-3xl border border-[#7a7073]  w-[98%]"
                    name="message"
                    id=""
                  ></textarea>
                </div>
              </div>
              <br />
              <button
                className="contact-btn w-[100%] rounded-3xl cursor-pointer py-[8px] px-[30px] text-[16px] text-[#F0E7FF] mb-[20px]"
                type="sumbit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
