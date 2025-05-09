"use client";

import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-[#f9f9f9] w-full">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 py-12 gap-8">
        
        {/* Left Content */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-black text-4xl sm:text-5xl font-bold leading-tight mb-8">
            No More Worrying <br /> About Smart Device <br /> Problems
          </h1>


          {/* <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
           <a href="tel:(346) 424-8465">
            <button className="bg-[#7ed956] hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 hover:animate-pulse">
             <FaPhoneAlt />
             Call Us
            </button>
          </a>
          <a
           href="https://www.google.com/maps/place/17330+Spring+Cypress+Rd,+Cypress,+TX+77429,+USA"
           target="_blank"
           rel="noopener noreferrer"
           >
           <button className="bg-[#7ed956] hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 hover:animate-pulse">
           <FaMapMarkerAlt />
           Get Direction
           </button>
          </a>
       </div> */}



          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="tel:(346) 424-8465">
              <button className="bg-green-300 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:scale-105 transition">
                <FaPhoneAlt />
                Call Us
              </button>
            </a>
            <a
              href="https://www.google.com/maps/place/17330+Spring+Cypress+Rd,+Cypress,+TX+77429,+USA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-green-300 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-md flex items-center gap-2 hover:scale-105 transition">
                <FaMapMarkerAlt />
                Get Direction
              </button>
            </a>
          </div>



        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[520px] h-auto">
            <Image
              src="https://igadgetdoc.us/assets/img/lp1.webp"
              alt="Broken Devices"
              width={600}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
