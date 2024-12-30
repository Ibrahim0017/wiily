import React from "react";

const DiagonalTextBand = () => {
  return (
    <>
      <div>
        <div
          className=" w-[100vw] h-[50px] bg-[#bce7f0] text-black font-bold text-lg flex items-center justify-center shadow-md"
          style={{
            top: "0%",
            left: "0%",
            transform: "rotate(-30deg)",
          }}
        >
          Willy is on sol
        </div>

        <div
          className=" w-[100vw] h-[50px] bg-[#bce7f0] text-black font-bold text-lg flex items-center justify-center shadow-md"
          style={{
            bottom: "00%",
            left: "0%",
            transform: "rotate(30deg)",
          }}
        >
          Dexscreener is active!
        </div>
      </div>
    </>
  );
};

export default DiagonalTextBand;
