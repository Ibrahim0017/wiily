import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import willyonfire from "../assets/Group 348.png";

const Tokenomics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for animations
      once: false,  // Animation will trigger every time element is in view
    });
  }, []);

  return (
    <div className="font-begel flex w-[75%] text-white justify-between text-shadow-outline">
      {/* Left Content */}
      <div
        className="flex flex-col items-center justify-center w-full text-center gap-4"
        data-aos="zoom-in"
      >
        <h1 className="text-[42px] max-md:text-[30px]">TOKENOMICS</h1>
        <p className="w-[400px] text-[13px]  text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque
          corporis dignissimos, praesentium amet aperiam officiis doloribus vel
          ipsa repellendus molestiae, reprehenderit, nesciunt velit rerum
          ratione voluptatum asperiores. Ab, explicabo? doloribus vel ipsa
          repellendus molestiae, reprehenderit, nesciunt velit rerum ratione
          voluptatum asperiores. Ab, explicabo?
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full h-[300px]" data-aos="flip-right">
        <img
          className="w-full h-full object-contain"
          src={willyonfire}
          alt="Willy On Fire"
        />
      </div>
    </div>
  );
};

export default Tokenomics;
