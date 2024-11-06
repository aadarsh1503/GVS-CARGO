import React from 'react';
import { FaLinkedin, FaInstagram , FaFacebook ,FaTwitter } from 'react-icons/fa';
import Foot from "./Foot.jpg"
import white from "./white.png"


const Footer = () => {
  return (
    <footer className="bg-DarkBlue lg:h-[450px] text-gray-200 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row max-w-7xl justify-between items-center px-4">
        
        {/* Left Section: Logo and Social Icons */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          {/* GVS Cargo & Logistics Logo */}
          <img src={white} alt="GVS Cargo & Logistics" className="h-56 lg:-mb-8 mb-0 rounded-xl w-56" />

          {/* Social Icons */}
          <div className="flex space-x-6">
  <a href="https://www.linkedin.com/company/gvsbahrain/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
    <FaLinkedin className="text-DarkBlue text-3xl" />
  </a>
  <a href="https://instagram.com/gvscargo" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
    <FaInstagram className="text-DarkBlue text-3xl" />
  </a>
  <a href="https://facebook.com/gvscargo" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
    <FaFacebook className="text-DarkBlue text-3xl" />
  </a>
  <a href="https://twitter.com/gvscargo" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full">
    <FaTwitter className="text-DarkBlue text-3xl" />
  </a>
</div>


          {/* Copyright */}
          <p className="mt-4 text-sm text-center  lg:text-left">© 2024 GVS Cargo & Logistics. All Rights Reserved.</p>
        </div>

        {/* Right Section: Newsletter and Developer Credit */}
        <div className="flex flex-col items-center lg:items-end space-y-6">
          {/* Newsletter Section */}
          <div className="flex flex-col items-center lg:items-center mb-8">
            <p className="text-lg mb-8">Follow the news:</p>
            <div className="flex flex-col w-70 lg:w-96"> {/* Adjust width as needed */}
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 text-gray-800 w-full"
              />
              <button className="bg-DarkYellow mt-2 hover:text-white text-gray-800 p-2 w-full rounded-full">
                Register
              </button>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="flex flex-col items-center">
            <p className="text-sm mb-2 text-center">Developed and monitored by:</p>
            <img src={Foot} alt="Alumiar Logo" className="h-32 w-46 rounded-xl lg:w-38" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
