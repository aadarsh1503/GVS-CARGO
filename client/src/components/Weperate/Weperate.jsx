import React, { useState, useEffect } from 'react';
import { FaMapMarkedAlt, FaGlobeAfrica } from 'react-icons/fa';
import MAPS from "./MAPS.png"

const Weperate = () => {
  const [modalContent, setModalContent] = useState(null); // State to track which modal is open

  const handleBrazilButtonClick = () => {
    setModalContent('brazil'); // Set content to show Brazil modal
  };

  const handleWorldButtonClick = () => {
    setModalContent('world'); // Set content to show World modal
  };

  const handleCloseModal = () => {
    setModalContent(null); // Close the modal
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (modalContent) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [modalContent]);

  return (
    <div className="flex flex-col lg:flex-row font-roboto justify-between max-w-5xl mx-auto items-center py-10 px-5 space-y-6 lg:space-y-0">
      {/* Left Section */}
      <div className="flex flex-col items-center lg:items-start space-y-4 lg:ml-32">
        <h2 className="text-xl lg:text-3xl lg:-ml-10 font-bold text-Graytext">Where We Operate:</h2>

        <button 
          className="flex items-center justify-center ml-4 hover:text-black bg-DarkOrange text-white py-2 px-4 lg:py-4 lg:px-8 rounded-full"
          onClick={handleBrazilButtonClick}
        >
          <FaMapMarkedAlt className="text-lg mr-2 " />
          <span className='text-white'>IN BRAZIL</span>
        </button>

        <button 
          className="flex items-center justify-center hover:text-black bg-DarkOrange text-white py-2 px-4 lg:py-4 lg:px-8 rounded-full"
          onClick={handleWorldButtonClick}
        >
          <FaGlobeAfrica className="text-sm mr-2" />
          <span className='text-white'>IN THE WORLD</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={MAPS}
          alt="Map or relevant image"
          className="w-full h-auto max-w-xs lg:max-w-full lg:h-[300px]"
        />
      </div>

      {/* Modal for Brazil */}
      {modalContent === 'brazil' && (
        <div className="fixed inset-0 flex items-center justify-center font-roboto bg-black bg-opacity-50">
          <div className="bg-white p-6 mb-10 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button 
              onClick={handleCloseModal} 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h3 className="lg:text-2xl text-xl font-semibold mb-4">IN BRAZIL</h3>
            <p>
              We operate in several Brazilian capitals, offering services that meet your demands nationwide quickly, safely, and with the transparency you need.
            </p>
            <p className="mt-2 mb-10">
              We operate in several Brazilian capitals, offering services that meet your demands nationwide quickly, safely, and with the transparency you need.
            </p>
            <button 
              onClick={handleCloseModal} 
              className="absolute bottom-1 right-4 mt-10 flex items-center justify-center bg-black text-yellow-600 py-2 px-4 "
            >
              To Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for World */}
      {modalContent === 'world' && (
        <div className="fixed inset-0 flex items-center justify-center font-roboto bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button 
              onClick={handleCloseModal} 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <div className='mb-10 z-10'>
              <h3 className="text-2xl font-semibold mb-4">IN THE WORLD</h3>
              <p>
                We offer our customers a fast, safe and personalized service, whether for imports, exports or obtaining all solutions for customs clearance.
              </p>
            </div>
            <button 
              onClick={handleCloseModal} 
              className="absolute bottom-2 right-4 flex items-center justify-center bg-black text-yellow-600 py-2 px-4"
            >
              To Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weperate;
