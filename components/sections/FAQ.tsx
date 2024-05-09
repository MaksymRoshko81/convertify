import { useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaAngleDown, FaAngleUp, FaMinus, FaPlus } from "react-icons/fa";

const faqArray = [
  {
    ques: "Can I use a custom domain ?",
    ans: "You can but is not necessary.",
  },
  {
    ques: "What is cloaking and why do I need it?",
    ans: "Link cloaking allows users to hide their links on social media, safeguarding the accounts from potential bans when directing traffic to 18+ sites.",
  },
  {
    ques: "Is it safe ?",
    ans: "Yes, it’s safe because we cloak our links.",
  },
  {
    ques: "How long does it take to set up and what do I need for it?",
    ans: "It takes around 24-48 hours to be delivered once we have your payment and the custom domain from you.",
  },
  {
    ques: "How does capturing bounced traffic works?",
    ans: "If a user presses go back in the native browser, they are redirected to either your free page or free trial link so they are given a second chance. It works with major browsers (Safari/Chrome)",
  },
  {
    ques: "Does it helps me if I have traffic from TikTok/Fetlife/DA?",
    ans: "Yes, it does if you funnel traffic trough Instagram.",
  },
  {
    ques: "Do you have a refferal system?",
    ans: "Yes, we do, contact us on telegram.",
  },
  {
    ques: "Do you offer refunds?",
    ans: "Yes, only if we can't provide you our link within 72 hours.",
  },
];
const FAQ = () => {
  const [isOpenArray, setIsOpenArray] = useState(Array(faqArray.length).fill(false));

  const toggleQuestion = (index: any) => {
    setIsOpenArray((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div id="faq" className="flex flex-col justify-center items-center w-full mt-10 px-[180px]  max-md:px-[20px] max-lg:px-[30px] max-xl1:px-[100px] gap-10 max-sm:mt-6 max-lg:mt-28 max-sm:px-6 max-sm:flex-wrap max-md:mt-6">
        <h1 className="text-[#8AAAE5] text-[40px] font-bold">Frequently Asked Questions</h1>
        <div className="flex flex-col w-full mb-10 px-[180px] max-sm:px-[10px] max-md:px-[100px]">
          {faqArray.map((data, idx) => {
            return (
              <div key={idx}>
                <div className="flex justify-between" onClick={() => toggleQuestion(idx)}>
                  <span className="text-[#8AAAE5]">{data.ques}</span>
                  <div className="mt-1.5">
                    {isOpenArray[idx] ? (
                      <FaMinus className="cursor-pointer text-lg text-[#8AAAE5]" />
                    ) : (
                      <FaPlus  className="cursor-pointer text-lg text-[#8AAAE5]" />
                    )}
                  </div>
                </div>
                <div className="border-1 border-gray-300 mt-2 mb-4"></div>
                {isOpenArray[idx] && (
                  <>
                    <div className="text-[#8AAAE5] mb-4">
                      {data.ans}
                    </div>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FAQ;
