import Image from "next/image";
import React from "react";

const Analytics = () => {
  return (
    <div
      id="services"
      className="flex px-[180px]  max-md:px-[20px] max-lg:px-[60px] max-xl1:px-[100px] gap-4 mt-20 max-md:flex-col max-md:flex-wrap max-sm:flex-wrap max-lg:flex-wrap justify-center"
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[532px] max-sm:w-full max-md:w-full">
          <h3 className="text-[40px] font-semibold text-[#8AAAE5] leading-[55px] mb-6 max-md:text-[32px] max-sm:text-[28px] max-sm:leading-10 max-md:leading-10">
            Analytics Dashboard
          </h3>
          <ul className="list-disc text-[#8AAAE5] text-lg mt-2 mb-6 max-sm:ml-10 max-md:ml-10">
            <li className="text-[#8AAAE5] text-lg">
            Demographic data
            </li>
            <li className="text-[#8AAAE5] text-lg">
            Insights on traffic
            </li>
            <li className="text-[#8AAAE5] text-lg">
            All your links in one place
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <Image
          src={"/img/analyticsNew.svg"}
          className="w-full h-full"
          width={100}
          height={100}
          alt="coin"
        />
      </div>
    </div>
  );
};

export default Analytics;
