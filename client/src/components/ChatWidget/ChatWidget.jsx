import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "./ChatWidget.css"; // Import your CSS file

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp numbers
 // Sales number (without "+" symbol)
  const supportNumber = "+971554201838"; // Support number (without "+" symbol)

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle button click for both "Sales" and "Support"
  const handleSendMessage = (messageType) => {
    const whatsappNumber = messageType === "sales" ? salesNumber : supportNumber;
    const message = messageType === "sales" ? "I have a sales inquiry" : "I need support";

    // Check if the user is on a mobile device
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    // Generate the appropriate WhatsApp link based on the device type
    const whatsappLink = isMobile
      ? `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

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

      {/* Two-Button Section for Sales and Support */}
      {isOpen && (
        <div className={`shadow-lg bg-white rounded-lg p-4 w-80 mt-2 relative animate-slide-up`}>
          <div className="bg-green-500 text-white p-3 rounded-t-lg">
            <p className="text-sm sm:text-base">
              Choose the option to contact us:
            </p>
          </div>

          {/* Buttons for "Sales" and "Support" */}
          <div className="p-4 flex flex-col space-y-4">
            {/* Sales Button */}
           
            {/* Support Button */}
            <button
              onClick={() => handleSendMessage("support")}
              className="bg-gray-200 text-green-700 p-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 flex items-center justify-center text-lg"
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
