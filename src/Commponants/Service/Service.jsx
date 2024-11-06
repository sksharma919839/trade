import React from "react";
import LeftService from "../../Image/leftservices.png";
import Feature1 from "../../Image//feature1.png";
import Feature2 from "../../Image/feature2.png";
import Feature3 from "../../Image/feature3.png";
import Feature4 from "../../Image/feature4.png";

const serItem = [
  {
    id: 0,
    img: Feature1,
    h4: "Secure For Users",
    p: "First and foremost, we use industry-leading encryption technology to protect all data that is transmitted to and from our platform. This means that all of our users' personal information and trading activity is kept confidential and secure.",
  },
  {
    id: 1,
    img: Feature2,
    h4: "Lightning Speed Transactions",
    p: "Our platform is powered by cutting-edge technology and infrastructure that is designed to handle high volumes of traffic and transactions. This means that our users can be confident that their orders will be executed quickly, without any delays or lag time.",
  },
  {
    id: 2,
    img: Feature3,
    h4: "Super Fast KYC",
    p: "Our KYC process is designed to be completed in just a few minutes, allowing our users to quickly and easily verify their identity and start trading on our platform. We use cutting-edge technology and automation to streamline the KYC process, eliminating unnecessary steps and reducing the time it takes to complete.",
  },
  {
    id: 3,
    img: Feature4,
    h4: "First Class Support",
    p: "Our support team is available 24/7 via email, live chat, and phone. Our team members are highly trained and experienced in all aspects of cryptocurrency trading, and are dedicated to providing prompt and accurate assistance to our users.",
  },
];
function Serv() {
  return (
    <>
      <div className="lg:flex items-center justify-evenly">
        <div className="sm:w-[570px] sm:h-[475px]">
          <img src={LeftService} className="sm:h-[475px] sm:w-[432px]" alt="" />
        </div>
        <div className="sm:w-[570px] sm:flex flex-wrap">
          {serItem.map((item) => (
            <div
              key={item.id}
              className="h-auto mx-[10px] mt-[40px] w-[255px] hover:mt-[30px] transition-all duration-700"
            >
              <img src={item.img} alt="" />
              <h4 className="text-[18px] mt-[30px] mb-[20px] text-[#ffffff]  border-l-[#198754] pl-[20px]">
                {item.h4}
              </h4>
              <p className="text-[14px] text-[#ffffffcc]">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Serv;
