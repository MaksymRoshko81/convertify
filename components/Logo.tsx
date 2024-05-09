import React from "react";
import Image from "next/image";

export default function Logo() {
    return (
        <div className="w-[220px] h-[220px] max-sm:w-[180px] flex items-center max-sm:h-[180px] max-md:w-[200px] max-md:h-[200px]">
            <Image src={"/img/convertify_logo.png"} alt="logo" width={180} height={180} />
        </div>
    );
}
