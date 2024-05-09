import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Location = () => {
  return (
    <div
      id="services"
      className="flex px-[180px]  max-md:px-[20px] max-lg:px-[60px] max-xl1:px-[100px]  max-sm:px-0 gap-4 mt-20 max-md:flex-col max-md:flex-wrap max-sm:flex-wrap max-lg:flex-wrap justify-center max-xl1:flex-wrap"
    >
      <div className="flex justify-center items-center max-sm:px-10 max-md:px-20">
        <div className="flex flex-col w-[532px] max-sm:w-full max-md:w-full">
          <h3 className="text-[48px] font-semibold text-[#8AAAE5] leading-[55px] mb-6 max-md:text-[32px] max-sm:text-[28px] max-sm:leading-10 max-md:leading-10">
            LANDING PAGE WITH LOCATION
          </h3>
          <ul className="list-disc text-[#8AAAE5] text-lg mt-2 mb-6">
            <li className="text-[#8AAAE5] text-lg">
            Can be ordered as an extra
            </li>
            <li className="text-[#8AAAE5] text-lg">
            Exact location of the user
            </li>
            <li className="text-[#8AAAE5] text-lg">
            Carousel with 18+ pictures
            </li>
          </ul>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/img/phone.png"}
          className="w-full max-w-[300px] h-[445px] mx-auto"
          width={300}
          height={445}
          alt="phone"
        />
        <div className="absolute inset-0 flex justify-center items-center mb-4">
          <Image
            src={"/img/newPics.jpg"}
            className="w-[195px] h-[410px] rounded-[20px]"
            width={195}
            height={410}
            alt="pic1"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
