import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Line = ({ margintop }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS
  }, []);

  return (
    <>
      <div
        className={`w-full flex items-center h-28 bg-[#DCFEFD] z-40`}
        style={{ marginTop: margintop }} // Apply dynamic margin-top using inline styles
        data-aos="fade-up" // AOS animation
        data-aos-duration="1200" // Custom duration
      >
        <div className="flex gap-3 items-center overflow-hidden">
          {Array(10)
            .fill("$Willy")
            .map((text, index) => (
              <h1
                key={index}
                className={`cursor-pointer font-begel text-[46px] ${
                  index % 2 === 0 ? "text-[#6f73c5]" : "text-white"
                } text-shadow-outline`}
              >
                {text}
              </h1>
            ))}
        </div>
      </div>
    </>
  );
};

export default Line;
