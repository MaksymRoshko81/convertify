import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div id="features" className="flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center px-[180px] max-sm:px-[10px] max-md:px-[20px] max-lg:px-[60px] max-xl1:px-[100px]">
        <h1 className="text-[#8AAAE5] text-[48px] font-extrabold text-center mb-10">
          Features
        </h1>
        <div className="flex justify-center items-center max-sm:pl-[10px] gap-4 max-xl1:flex-wrap max-sm:flex-wrap max-md:flex-wrap max-lg:flex-wrap">
          <div className="flex flex-col">
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
                  src={"/img/video2.gif"}
                  className="w-[195px] h-[410px] rounded-[20px]"
                  width={195}
                  height={410}
                  alt="pic1"
                />
              </div>
            </div>
            <p className="text-[#8AAAE5] text-lg text-center mt-2 font-semibold">
              What Instagram Sees
            </p>
          </div>
          <div className="flex flex-col w-[300px] justify-center items-center">
            <h4 className="text-[#8AAAE5] text-2xl font-bold mb-4">
              Cloak your links
            </h4>
            <ul className="list-disc text-[#8AAAE5] ml-4">
              <li className="text-[#8AAAE5]">Prevent account bans</li>
              <li className="text-[#8AAAE5]">Link directly to adult sites</li>
            </ul>
          </div>
          <div className="flex flex-col">
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
                  src={"/img/video1.gif"}
                  className="w-[195px] h-[410px] rounded-[20px]"
                  width={195}
                  height={410}
                  alt="pic1"
                />
              </div>
            </div>
            <p className="text-[#8AAAE5] text-lg text-center mt-2 font-semibold">
              What Users see
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
