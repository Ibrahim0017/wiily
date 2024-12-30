import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <div className=" px-6 z-40 flex items-center justify-between w-[75%] h-[65px] bg-[#dcfefd] rounded-b-[10px] max-xl:w-[85%] shadow-[#797BA6] shadow-md">
      <div className="flex text-[22px] gap-4 ">
          <PiTelegramLogo/>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="cursor-pointer font-begel text-[46px] text-[#6f73c5] text-shadow-outline">
            $Willy
          </h1>
        </div>
        <div className="flex text-[22px] gap-4">
          <FaXTwitter />
        </div>
      </div>
    </>
  );
};

export default Header;
