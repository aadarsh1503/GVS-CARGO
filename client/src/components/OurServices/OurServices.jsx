import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

const OurServices = () => {
  return (
    <div className="relative flex items-center mt-32 justify-center h-auto lg:h-96 bg-cover bg-center text-white overflow-hidden" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/aerial-view-cargo-ship-with-containers-sailing-open-sea-from-topdown-perspective_972667-17643.jpg)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-5xl mx-auto p-4 lg:p-8">
        
        {/* Title (Left Aligned) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start mb-4 lg:mb-0">
          <h2 className="text-2xl lg:text-3xl font-bold">OUR SERVICES</h2>
        </div>

        {/* Services List (Right Aligned) */}
        <div className="w-full lg:w-1/2 text-lg space-y-4 lg:space-y-0">
          {/* First Row with 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <FaDotCircle className="text-yellow-500" />
              <span>Stuffing and Spawning</span>
            </div>
            <div className="flex items-center lg:w-[500px] space-x-2">
              <FaDotCircle className="text-yellow-500" />
              <span>LCL (less-than-container loaded)</span>
            </div>
          </div>

          {/* Second Row with 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="flex items-center lg:w-[500px] space-x-2">
              <FaDotCircle className="text-yellow-500" />
              <span>FCL (full container loaded)</span>
            </div>
            <div className="flex items-center lg:w-[500px] lg:ml-20 lg:col-span-1 space-x-2">
              <FaDotCircle className="text-yellow-500" />
              <span>DGR / PER</span>
            </div>
            <div className="flex items-center lg:w-[500px] lg:ml-20 lg:col-span-1 space-x-2">
              <FaDotCircle className="text-yellow-500" />
              <span>Fumigation</span>
            </div>
          </div>

          {/* Third Row with 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="flex items-center space-x-2">
              <FaDotCircle className="text-yellow-500" />
              <span>Packaging</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaDotCircle className="text-yellow-500" />
              <span>Storage</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaDotCircle className="text-yellow-500" />
              <span>Consulting</span>
            </div>
            <div className="flex items-center lg:w-[500px] space-x-2">
              <FaDotCircle className="text-yellow-500" />
              <span>Cargo Insurance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
