import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import LocationSection from '../Map/Map';

const ContactUs = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Handle reCAPTCHA verification
  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);  // Set to true if reCAPTCHA returns a value
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify that you're not a robot.");
      return;
    }

    // Handle form submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Fill in the required fields*</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company" className="sr-only">Company</label>
          <input
            type="text"
            id="company"
            placeholder="Company *"
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name *"
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="ddd" className="sr-only">DDD</label>
            <input
              type="text"
              id="ddd"
              placeholder="DDD *"
              className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="telephone" className="sr-only">Telephone</label>
            <input
              type="text"
              id="telephone"
              placeholder="Telephone *"
              className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email *"
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            placeholder="Message *"
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        {/* Google reCAPTCHA */}
        <div className="flex  my-4">
          <ReCAPTCHA
            sitekey="6Lf37HIqAAAAABPNAqtXItougGbBI3lMOLt9rODa"  // Replace 'YOUR_SITE_KEY' with your actual site key from Google reCAPTCHA
            onChange={handleCaptchaChange}
          />
        </div>

        <div className="flex ">
          <button
            type="submit"
            className="bg-yellow-400 text-white py-2 px-8 text-lg font-semibold hover:bg-yellow-500 transition duration-300"
            disabled={!captchaVerified} // Disable button until captcha is verified
          >
            Send
          </button>
        </div>
      </form>
      <div className='lg:-ml-48 -ml-32'>
      <LocationSection />
      </div>
      
    </div>
  );
};

export default ContactUs;
