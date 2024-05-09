import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Map = () => {
  return (
    <div id="whitepaper" className="flex flex-col px-[180px]  max-md:px-[20px] max-lg:px-[60px] max-xl1:px-[100px] justify-center items-center mt-14 max-sm:px-8 mb-20">
      <h2 className="text-[40px] font-bold text-[#8AAAE5] text-center mb-2 max-sm:text-[28px] max-md:text-[32px]">Geographical Cloaking </h2>
      <ul className="list-disc text-[#8AAAE5] text-lg mt-2 mb-6 max-sm:ml-10">
          <li className="text-[#8AAAE5] text-lg">Hide your link from undesired countries</li>
          <li className="text-[#8AAAE5] text-lg">
          Select up to 32 countries
          </li>
        </ul>
        
        <div className="w-full">
        <Image
          src={"/img/mapNew.svg"}
          className="w-full h-full"
          width={100}
          height={100}
          alt="map"
        />
        </div>
    </div>
  );
};
export default Map;
