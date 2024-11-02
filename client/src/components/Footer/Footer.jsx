import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import i10 from "./i10.png"
import i12 from "./i12.png"

const Footer = () => {
  return (
    <footer className="bg-GrayFoot lg:h-[600px] text-gray-200 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row max-w-7xl justify-between items-center px-4">
        
        {/* Left Section: Logo and Social Icons */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          {/* BR Freight Shipping Logo */}
          <img src={i10} alt="BR Freight Shipping" className="h-20 mb-4" />

          {/* Social Icons */}
          <div className="flex space-x-4">
            <div className="bg-yellow-400 p-2 rounded-full">
              <FaLinkedin className="text-gray-800 text-3xl" />
            </div>
            <div className="bg-yellow-400 p-2 rounded-full">
              <FaInstagram className="text-gray-800 text-3xl" />
            </div>
          </div>

          {/* Copyright */}
          <p className="mt-4 text-sm text-center lg:text-left">© 2022 BR Freight Shipping. All Rights Reserved.</p>
        </div>

        {/* Right Section: Newsletter and Developer Credit */}
        <div className="flex flex-col items-center lg:items-end space-y-6">
          {/* Newsletter Section */}
          <div className="flex flex-col items-center lg:items-center mb-8">
            <p className="text-lg mb-8">Follow the news:</p>
            <div className="flex flex-col w-70 lg:w-96"> {/* Adjust width as needed */}
              <input
                type="email"
                placeholder="enter your email"
                className="p-2 text-gray-800 w-full"
              />
              <button className="bg-yellow-300 mt-2 hover:text-white text-gray-800 p-2 w-full rounded-full">
                Register
              </button>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="flex flex-col items-center">
            <p className="text-sm mb-2 text-center">Developed and monitored by:</p>
            <img src={i12} alt="Alumiar Logo" className="h-36 w-full lg:w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
