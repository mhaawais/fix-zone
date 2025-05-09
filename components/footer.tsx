"use client";

import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] w-full text-center px-4 py-16">
      {/* Heading */}
      <h2 className="text-black text-3xl lg:text-4xl font-bold mb-4">Let’s Fix Your Devices</h2>

      {/* Subheading */}
      <p className="text-black text-lg lg:text-xl mb-8">
        Come over to our shop, and we’ll get you started right away. You won’t be disappointed!
      </p>

      {/* Call Button */}
      <a
        href="tel:(346) 424-8465"
        className="bg-green-300 text-black font-medium px-6 py-3 rounded hover:bg-green-600 transition inline-flex items-center gap-3 mb-10"
      >
        <FaPhoneAlt className="text-lg" />
        Call Us
      </a>

      {/* Divider & Bottom Section */}
      <div className="text-black text-sm">
        <p className="mb-2">
          © Copyright <span className="font-bold">FIXZONE</span> All Rights Reserved
        </p>
        {/* <p className='text-black'>
          <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms & Conditions</a>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
