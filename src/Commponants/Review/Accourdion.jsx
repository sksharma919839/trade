import React, { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="mt-[40px] transition-all duration-500">
      <div
        className="p-[10px] lg:w-auto sm:w-[70%] w-[90%]  border border-[#0e0c1c] transition-all duration-500 rounded-3xl acc-q bg-[#0E0C1C] cursor-pointer text-[#ffffff]"
        onClick={onClick}
      >
        {title}
      </div>
      {isOpen && (
        <div className=" mt-[15px] lg:w-auto sm:w-[70%] w-[90%] ml-[10px] transition-all duration-500 text-[#ffffffe3] text-[14px]">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="rounded transition-all duration-500">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          className="transition-all duration-500"
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};
const App = () => {
  const accordionItems = [
    {
      title: "End-to-end encryption for iOS Devices",
      content:
        "we take data privacy and security very seriously. That's why we are proud to offer end-to-end encryption for iOS devices. End-to-end encryption is the most secure way to communicate and share data. It ensures that only the sender and intended recipient can access the information being transmitted, making it virtually impossible for anyone else to intercept or read the message.",
    },
    {
      title: "Secure Transactions",
      content:
        "First and foremost, we use the latest encryption technologies to protect all data transmitted through our platform. This means that all data, including user information and transaction details, is fully encrypted and protected from interception by third parties.",
    },
    {
      title: "Quick Transactions",
      content:
        "In addition to speed, we also prioritize security and reliability. Our platform is fully secure, with the latest encryption technologies and multi-factor authentication to protect your account and transactions. We also have a team of experts monitoring our platform 24/7 to ensure that it is always up and running smoothly",
    },
  ];

  return (
    <div className="App">
      <Accordion
        items={accordionItems}
        className="transition-all duration-500"
      />
    </div>
  );
};

export default App;
