import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "./ChatWidget.css"; // Import your CSS file

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp number for support
  const supportNumber = "+971554201838"; 

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle button click for "Support"
  const handleSendMessage = () => {
    const message = "I need support";

    // Check if the user is on a mobile device
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    // Generate the appropriate WhatsApp link based on the device type
    const whatsappLink = isMobile
      ? `whatsapp://send?phone=${supportNumber}&text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${supportNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="fixed bottom-10 right-5 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={toggleChat}
        className="bg-green-500 text-white p-2 pl-3 pr-4 rounded-full shadow-lg flex items-center hover:bg-green-600 transition duration-300"
      >
        {isOpen ? (
          <FaTimes size={18} />
        ) : (
          <>
            <FaWhatsapp size={18} className="mr-1" />
            <span className={`hidden sm:inline ${isOpen ? "waving-text" : ""}`}>
              Hi, how can I help?
            </span>
          </>
        )}
      </button>

      {/* Support Section */}
      {isOpen && (
        <div className={`shadow-lg rounded-lg p-4 w-80 mt-2 relative animate-slide-up`}>
          <div className="bg-green-500 text-white p-3 rounded-t-lg">
            <p className="text-sm sm:text-base">
              Need assistance? Contact us on WhatsApp:
            </p>
          </div>

          {/* Support Button */}
          <div className="p-4">
            <button
              onClick={handleSendMessage}
              className="bg-gray-200 text-green-700 p-3 w-[250px] rounded-lg shadow-md hover:bg-gray-300 transition duration-300 flex items-center justify-center text-lg"
            >
              <FaWhatsapp className="mr-2" size={20} />
              Support
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
