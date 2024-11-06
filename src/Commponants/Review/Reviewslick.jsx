import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      h6: "Rahul Jain",
      small: "Mumbai",
      content:
        "I have been using Safe Trade World for a while now and I can say that it is one of the best cryptocurrency exchanges out there. The platform is user-friendly and easy to navigate, and the trading fees are very competitive",
    },
    {
      id: 2,
      h6: "Mo. Mumtaz",
      small: "Delhi",
      content:
        "I have been trading on Safe Trade World for a few months now and I can say that the platform is reliable and secure. I also like the fact that they offer a wide variety of cryptocurrencies to trade.",
    },
    {
      id: 3,
      h6: "Aakash Sharma",
      small: "Noida,UP",
      content:
        "I appreciate the fast KYC process at Safe Trade World, it only took me a few minutes to verify my account and start trading. The customer support team is also very helpful and responsive.",
    },
    {
      id: 4,
      h6: "Ankit sahu",
      small: "Jaipur",
      content:
        "I have used several cryptocurrency exchanges in the past, but Safe Trade World is by far the best. The platform is fast and reliable, and the user interface is intuitive. I also appreciate the security features they have in place to protect user accounts.",
    },
  ];

  return (
    <div className="sm:w-[500px] w-[80%]  m-auto z-[0]">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="h-auto z-0  flex items-center py-[16px] px-[20px] rounded-xl justify-center bg-[#121724]"
          >
            <div className="flex items-center">
              <div className="w-[56px] h-[56px] rounded-[50%] flex items-center justify-center  text-[#209dac] bg-[#b7eef5]">
                <FaQuoteLeft size={30} />
              </div>
              <h6 className="text-[#ffffff] ml-[20px] text-[16px] font-bold">
                {slide.h6} <br /> <small>{slide.small}</small>
              </h6>
            </div>
            <div className="ml-[10px] mt-[20px]">
              <span className="text-[#ccc7fb] text-[14px]">
                {slide.content}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
