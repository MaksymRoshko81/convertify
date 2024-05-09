import { useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Logo from "../Logo";

const ContactUs = () => {
  return (
    <div id="contact" className="flex flex-col justify-center items-center w-full mt-10 px-[180px]  max-md:px-[20px] max-lg:px-[60px] max-xl1:px-[100px] gap-2 max-sm:mt-0 max-lg:mt-28 max-sm:px-6 max-sm:flex-wrap">
      <h1 className="text-[#8AAAE5] text-[40px] font-bold">Contact Us</h1>
      <div className="flex justify-center items-center gap-2">
        <p className="text-[#8AAAE5]">Email:</p>
        <p className="text-[#8AAAE5]"><a href="mailto:contact@convertify.tech">contact@convertify.tech</a></p>
      </div>
      <div className="flex justify-center items-center gap-20 mt-4 mb-10">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#8AAAE5] mb-2">Update channel</p>
          <div className="bg-gray-300 rounded-[100px]">
            <a href="https://t.me/OFMconvertify">
            <Image
              src={"/img/telegram.webp"}
              className="w-full h-full rounded-[100px]"
              width={100}
              height={100}
              alt="instaa"
            />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#8AAAE5] mb-2">Message</p>
          <div className="bg-gray-300 rounded-[100px]">
            <a href="https://t.me/comandanteofm">
            <Image
              src={"/img/telegram.webp"}
              className="w-full h-full rounded-[100px]"
              width={100}
              height={100}
              alt="instaa"
            />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-auto max-sm:w-[120px] flex justify-center max-sm:h-[70px] max-md:w-[120px] max-md:h-[80px]">
            <Image src={"/img/convertify_logo.png"} alt="logo" width={185} height={185} />
        </div>
    <div className="w-full h-[1px] mb-2 border border-gray-300"></div>
    <p className="text-center text-[#8AAAE5] text-lg mb-4">© 2024 Convertify | All Rights Reserved.</p>

    </div>
  );
};

export default ContactUs;
