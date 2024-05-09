import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Features from "./sections/Features";
import Escape from "./sections/Escape";
import Traffic from "./sections/Traffic";
import Location from "./sections/Location";
import Map from "./sections/Map";
import Analytics from "./sections/Analytics";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import ContactUs from "./sections/ContactUs";


export default function Banner() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center px-[240px] max-sm:px-[10px] max-md:px-[20px] max-lg:px-[60px] max-xl1:px-[100px]">
          <h1 className="text-[#8AAAE5] text-[48px] font-extrabold text-center leading-[50px]">
            The #1 solution to increase your Instagram traffic conversion
          </h1>
          <p className="text-center text-[#8AAAE5] text-lg mt-6">
            Capture lost traffic with our smart recovery feature.
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <a href="#pricing">
              <Button className="font-semibold flex text-[#FEFEFE] bg-[#8AAAE5] rounded-md px-8 max-sm:px-4 max-sm:py-2 py-6 text-base">
                ORDER NOW
              </Button>
            </a>
            <a href="#contact">
              <Button className="font-semibold flex text-[#FEFEFE] bg-[#8AAAE5] rounded-md px-8 max-sm:px-4 max-sm:py-2 py-6 text-base">
                CONTACT US
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Features />
      <Escape />
      <Traffic />
      <Location />
      <Map />
      <Analytics />
      <Pricing />
      <FAQ />
      <ContactUs />
    </div>
  );
}
