import React from "react";
import { Link } from "react-router-dom";

const aboutItem = [
  {
    id: 0,
    p: "Welcome to Safe Trades World, the premier destination for secure and seamless cryptocurrency trading. Our mission is to provide a world-class trading platform that is easy to use, secure, and reliable. We are committed to making cryptocurrency trading accessible to everyone, regardless of their level of experience.",
  },
  {
    id: 1,
    p: "Founded in 2016, Safe Trades World has quickly established itself as a leader in the cryptocurrency industry. Our platform offers a wide range of trading pairs, competitive fees, and industry-leading security measures to ensure the safety of our users' assets.",
  },
  {
    id: 2,
    p: "At Safe Trades World, we believe that cryptocurrency has the potential to transform the global financial system. That's why we are committed to promoting the adoption of cryptocurrency by providing a user-friendly platform that makes it easy to buy, sell, and trade digital assets.",
  },
  {
    id: 3,
    p: "Our team is made up of experienced professionals from the cryptocurrency and finance industries. We are dedicated to providing exceptional customer service and support to ensure that our users have a seamless trading experience.We are also committed to transparency and accountability. We believe that our users have the right to know how their assets are being managed and how we are safeguarding their security. That's why we use advanced security measures, including multi-factor authentication and cold storage, to protect our users' assets.At Safe Trades World, we are passionate about cryptocurrency and its potential to revolutionize the financial industry. We are committed to being a trusted partner for our users and helping them to achieve their financial goals through cryptocurrency trading.",
  },
  {
    id: 4,
    p: "Our team is made up of experts in finance, technology, and security, who are passionate about cryptocurrency and its potential to revolutionize the way we do business. We're dedicated to providing our users with the best possible trading experience, and we're constantly working to improve our platform and add new features and services. We believe in transparency and accountability, and we're committed to complying with all relevant laws and regulations. We're also dedicated to protecting our users' privacy and security, with advanced encryption technologies and multi-factor authentication to ensure that your account and transactions are always safe and secure.",
  },
];
function About() {
  return (
    <>
      <div className="pt-[115px] ">
        <div className=" pt-[10px] bg-[#1d1a2e] rounded-b-[70px]">
          <div className="flex items-center justify-center mt-[10px] mb-[20px]">
            <h1 className="text-[36px] text-center text-[#ffffff] border-b-[#5949ff] border-b  border-b-[6px] w-[150px] rounded-3xl">
              About Us
            </h1>
          </div>
          <div className="flex  items-center justify-center pb-[60px]">
            <div className="flex items-center h-[34px] rounded-3xl w-[143px] justify-center bg-[#010103] py-[5px] px-[15px]">
              <Link
                to="/traded"
                className="text-[#ffffffbf] text-16px hover:text-[#4337c2] transition-all duration-500 mr-[5px]"
              >
                Home
              </Link>{" "}
              <p className="text-[16px] text-[#ffffff]">// About</p>
            </div>
          </div>
        </div>
        <div className="mt-[40px] flex item-center justify-center mb-[100px]">
          <div className="sm:w-[70%] w-[85%] h-auto bg-[#20202d] rounded-3xl">
            <div className="p-[30px]">
              {aboutItem.map((items) => (
                <p
                  key={items.id}
                  className="text-[15px] text-[#ffffffcc] mb-[24px]"
                >
                  {items.p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
