import React from "react";
import { HiOutlineStar } from "react-icons/hi";
import { MdOutlineDirections } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import { TfiNewWindow } from "react-icons/tfi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Starter",
      price: "49$",
      stripe: "https://buy.stripe.com/eVa8ylakx9wp4KY4gh",
      features: [
        { icon: <MdOutlineDirections />, text: "Direct redirect" },
        { icon: <BiHide />, text: "Cloaked link" },
        { icon: <TfiNewWindow />, text: "Escape in-app browser" },
        {
          icon: <TbBrandGoogleAnalytics />,
          text: "Custom analytics dashboard",
        },
      ],
    },
    {
      title: "Medium",
      price: "59$",
      stripe: "https://buy.stripe.com/dR615TfERgYRb9m003",
      features: [
        { icon: <MdOutlineDirections />, text: "Direct redirect" },
        { icon: <BiHide />, text: "Cloaked link" },
        { icon: <TfiNewWindow />, text: "Escape in-app browser" },
        {
          icon: <TbBrandGoogleAnalytics />,
          text: "Custom analytics dashboard",
        },
        { icon: <HiOutlineStar />, text: "Recover bounced traffic" },
      ],
    },
    {
      title: "Pro",
      price: "69$",
      stripe: "https://buy.stripe.com/4gw8yl64hfUNgtG6oq",
      features: [
        { icon: <HiOutlineStar />, text: "Landing page with location" },
        { icon: <BiHide />, text: "Cloaked link" },
        { icon: <TfiNewWindow />, text: "Escape in-app browser" },
        {
          icon: <TbBrandGoogleAnalytics />,
          text: "Custom analytics dashboard",
        },
        { icon: <HiOutlineStar />, text: "Recover bounced traffic" },
      ],
    },
  ];

  return (
    <div
      id="pricing"
      className="flex justify-center items-center mt-20 px-[180px]  max-md:px-[20px] max-lg:px-[60px] max-xl1:px-[100px] max-sm:px-10"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold text-[#8AAAE5] text-center mb-2 max-sm:text-[28px] max-md:text-[32px]">
          Pricing
        </h2>
        <p className="text-lg text-[#8AAAE5] text-center mb-6">
          Discounts for 4+ links
        </p>
        <div className="flex justify-center items-center gap-10 max-sm:flex-wrap  max-md:flex-wrap  max-lg:flex-wrap">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="pricing-option rounded-lg px-8 py-6 max-sm:px-6 max-sm:py-6 flex flex-col items-center border-1 border-gray-400 w-full h-[450px] max-md:w-full max-md:h-full max-sm:w-full max-sm:h-full max-xl1:w-full max-lg1:w-full max-md1:w-full relative"
            >
              <h4 className="text-[#8AAAE5] text-4xl font-semibold mb-4">
                {option.title}
              </h4>
              <span className="text-[#8AAAE5] text-base">
                <span className="text-[#8AAAE5] text-3xl font-semibold mr-1">
                  {option.price}
                </span>
                per link/monthly
              </span>
              <ul className="text-[#8AAAE5] text-lg text-center mt-10">
                {option.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-[#8AAAE5] text-lg flex items-center justify-center mb-2"
                  >
                    {feature.icon}
                    <span className="ml-1">{feature.text}</span>
                  </li>
                ))}
              </ul>
              <a href={option.stripe} className="absolute bottom-4 font-semibold max-sm:static max-md:static  flex text-[#FEFEFE] bg-[#8AAAE5] rounded-md px-8 max-sm:px-4 max-sm:py-2 py-2 text-base mt-4 cursor-pointer">
              <button >
                ORDER NOW
              </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
