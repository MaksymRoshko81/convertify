import { Button } from "@nextui-org/react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { GrApple } from "react-icons/gr";
import React from "react";

const Escape = () => {
  return (
    <div className="flex justify-around items-center px-[180px] max-md:px-[20px] max-lg:px-[60px] max-xl1:px-[100px] max-sm:px-[10px] mt-20 max-sm:flex-wrap max-md:flex-wrap max-lg:flex-wrap">
      <div className="flex flex-col justify-center items-center ">
        <h4 className="text-[#8AAAE5] text-2xl font-bold">
          ESCAPE IN-APP BROWSER
        </h4>
        <ul className="list-disc text-[#8AAAE5] text-lg mt-2">
          <li className="text-[#8AAAE5] text-lg">Opens links in native browser</li>
          <li className="text-[#8AAAE5] text-lg">
            Improve your conversion rate
          </li>
          <li className="text-[#8AAAE5] text-lg">
            One-click subscriptions
          </li>
          
        </ul>
      </div>
      <div className="flex flex-col gap-6 max-sm:mt-4 max-md:mt-4 max-lg:mt-4">
        <div className="flex justify-center items-center gap-10">
          <div className="flex justify-center items-center gap-4">
            <div>
              {/* <Image
    src={"/img/apple.png"}
    className="w-full h-full bg-none"
    width={45}
    height={45}
    alt="apple"
  /> */}
              <GrApple className="text-[48px]"/>
            </div>

            <div className="bg-gray-300 rounded-[100px]">
              <Image
                src={"/img/instaa.webp"}
                className="w-full h-full rounded-[100px]"
                width={45}
                height={45}
                alt="instaa"
              />
            </div>
          </div>
          <FaAngleRight className="text-2xl text-[#8AAAE5]" />
          <div className="bg-gray-300 rounded-[100px]">
            <Image
              src={"/img/safari.png"}
              className="w-full h-full rounded-[100px]"
              width={45}
              height={45}
              alt="apple"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className="flex justify-center items-center gap-4">
            <div>
              <Image
                src={"/img/image 5.png"}
                className="w-full h-full"
                width={45}
                height={45}
                alt="apple"
              />
            </div>
            <div className="bg-gray-300 rounded-[100px]">
              <Image
                src={"/img/instaa.webp"}
                className="w-full h-full rounded-[100px]"
                width={45}
                height={45}
                alt="instaa"
              />
            </div>
          </div>
          <FaAngleRight className="text-2xl text-[#8AAAE5]" />
          <div className="bg-gray-300 rounded-[100px]">
            <Image
              src={"/img/chrome.png"}
              className="w-full h-full rounded-[100px]"
              width={45}
              height={45}
              alt="apple"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Escape;
