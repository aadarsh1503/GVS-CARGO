import React from 'react';
import Bounce from '../Bounce/Bounce';
import Slide from '../Slide/Slide';
import ColorBar from '../Colorbar/Colorbar';

function AirFreightSection() {
  return (
    <div>
      <div className="flex flex-col items-start max-w-5xl lg:mt-32 mx-auto text-gray-700 p-4 lg:p-8 bg-white">
        <div className="mb-2 flex flex-col lg:flex-row mt-6 items-start justify-between w-full">
          <div className="flex-1 mb-4 lg:mb-0">
            <h2 className="text-3xl lg:ml-48 lg:mt-4 font-bold mb-1">
              Air Freight
            </h2>
            <div className="h-1 lg:w-56 lg:ml-36 bg-yellow-500"></div>
          </div>
          <div className="w-full lg:w-1/2 ml-4 lg:ml-0">
            <p className="text-md mt-4 text-GrayDark">
              <strong>BR Freight Shipping</strong>, through its professionalism and solidity, has achieved over the years and through several successful projects, an excellent relationship and a strong bond with all airlines, thus offering the best in cargo transportation, in addition to excellent freight conditions for each type of merchandise, whether in Brazil or abroad.
            </p>
            <p className="text-md mt-4">
              Also providing a complete and personalized <strong>DOOR TO DOOR</strong> service, with complete security, speed and transparency; BR Freight Shipping collects your merchandise, accommodates it, ships it, tracks it and delivers it anywhere in the world.
            </p>
          </div>
        </div>
      </div>
      <Bounce />
      <div className='mb-10 mt-10'>
        <Slide />
      </div>
     
        <ColorBar />
     
    </div>
  );
}

export default AirFreightSection;
