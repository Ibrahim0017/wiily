import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import vector from '../assets/Vector 256.png';
import willy from '../assets/Group 347.png';

const AboutWilly = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
      easing: 'ease-in-out', // Easing function for smooth animations
      once: false, // Animation will trigger every time the element enters the viewport
    });
  }, []);

  return (
    <div className="font-begel w-[87%] p-20 max-md:w-[94%]" style={{ position: 'relative' }}>
      <div
        className="py-[150px] px-[150px] max-lg:p-[80px] max-md:p-[30px] flex gap-20"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: '100% 100%', // Ensures the vector fits within the container
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        data-aos="fade-up" // Add AOS animation to this container
      >
        {/* Left Image */}
        <div className="w-full max-lg:hidden" data-aos="fade-right">
          <img className="w-full h-full" src={willy} alt="Willy Illustration" />
        </div>

        {/* Right Content */}
        <div
          className="w-full flex flex-col items-center gap-3 justify-center text-white"
          data-aos="fade-left"
        >
          <h1 className="text-[50px] text-shadow-outline">$Willy</h1>
          <h3 className="text-center text-[16px] max-md:text-[12px] text-shadow-outline">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa quam voluptatem ab eveniet voluptatum dolore distinctio, perferendis reprehenderit fugiat iusto tem ab eveniet voluptatum dolore distinctio, perferendis reprehenderit fugiat
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutWilly;

