import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroimg from "../assets/Group 346.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
      easing: "ease-in-out", // Easing for smooth animations
      once: false, // Animations trigger every time elements come into view
    });
  }, []);

  return (
    <div className="max-lg:flex-col-reverse flex items-center justify-between">
      {/* Left Text */}
      <div
        className="mt-6 [text-shadow:_0_5px_0_rgb(120_122_165/_100%)] font-begel text-[150px] text-white stroke-1px stroke-black max-md:text-[100px] text-shadow-outline"
        data-aos="fade-right" // AOS animation for the text
      >
        Willy
        <div className="mt-[-75px]">on sol</div>
      </div>

      {/* Right Image */}
      <div
        className="w-[550px] mt-[-65px] max-lg:w-[450px] max-sm:w-[300px]"
        data-aos="fade-left" // AOS animation for the image
      >
        <img className="w-full h-full" src={heroimg} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
