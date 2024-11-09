import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import LocationSection from '../Map/Map';
import { AiOutlineCheckCircle } from 'react-icons/ai'; // Import check icon
import './ContactUs.css'; // Import external CSS file

const ContactUs = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    ddd: '',
    telephone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false); // To show the success message
  const [isAnimationVisible, setIsAnimationVisible] = useState(false); // For tick animation
  const [formSubmitted, setFormSubmitted] = useState(false); // To hide the form after submission

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify that you're not a robot.");
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage(false); // Reset success message on new submit

    try {
      const response = await fetch('https://gvs-cargo-1.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(true);
        setIsAnimationVisible(true);
        setFormSubmitted(true); // Hide form after successful submission

        // Set timeout to refresh the page after 5 seconds
        setTimeout(() => {
          window.location.reload(); // Refresh after 5 seconds
        }, 5000); // Refresh after 5 seconds
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      {!formSubmitted && (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Fill in the required fields*</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="company" className="sr-only">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company *"
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
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
                  name="ddd"
                  value={formData.ddd}
                  onChange={handleInputChange}
                  placeholder="DDD *"
                  className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="telephone" className="sr-only">Telephone</label>
                <input
                  type="text"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
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
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email *"
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message *"
                rows="4"
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            {/* Google reCAPTCHA */}
            <div className="flex my-4">
              <ReCAPTCHA
                sitekey="6LeqpnkqAAAAAHNUm3Ey9nv2T0hmhl0Ym4L_yaTS"  // Replace with your actual site key
                onChange={handleCaptchaChange}
              />
            </div>

            {/* Submit button */}
            <div className="flex">
              <button
                type="submit"
                className="bg-yellow-400 text-white py-2 px-8 text-lg font-semibold hover:bg-yellow-500 transition duration-300"
                disabled={!captchaVerified || isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </>
      )}

      {/* Success message with blue background and larger tick */}
      {successMessage && (
        <div className="success-message flex items-center bg-DarkBlue text-white p-4 rounded-lg shadow-lg">
          <AiOutlineCheckCircle className="checkmark text-5xl mr-4 animate-pulse" />
          <span className="text-lg font-semibold">Form submitted successfully! We'll get in touch with you shortly.</span>
        </div>
      )}

      <div className="lg:-ml-48 -ml-32">
        <LocationSection />
      </div>
    </div>
  );
};

export default ContactUs;
