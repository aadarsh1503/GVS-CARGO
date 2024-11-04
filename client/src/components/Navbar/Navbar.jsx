import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaGlobe } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { useState } from 'react';
import { FaChevronDown, FaTimes ,FaBars  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GVS from "./GVS.png"
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


const Navbar = () => {
  
  const items = [
    'Home',
    'About Us',
    'Freights',
    'Services',
    'Tools',
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Home');


    
    

  return (
    <div>
    <header className="bg-DarkBlue">
      {/* Top Bar */}
      <div className="flex justify-between max-w-4xl mx-auto font-roboto items-center px-4 py-1 text-white text-sm">
  <span>Welcome to GVS Cargo & Logistics</span>
  <div className='mt-1'>
<LanguageSwitcher />
</div>
</div>


      </header>

      {/* Main Navbar */}
      <div className="bg-white py-6">
  <div className="container mx-auto max-w-5xl flex flex-col lg:flex-row justify-between items-center">
    {/* Logo */}
    <div className="mb-6 lg:mb-0">
      <img src={GVS} alt="GVS Cargo & Logistics" className="h-36 W-56" />
    </div>

    {/* Contact Info */}
    <div className="flex flex-col font-roboto lg:flex-row max-w-5xl mx-auto items-center space-y-4 lg:space-y-0 lg:space-x-6 text-gray-700">
      <div className="flex items-center space-x-2">
        <MdLocationOn className="text-DarkBlue text-5xl" />
        <span className='text-sm text-left'>221 Salah Al Din St -  <br /> Deira - Dubai -  <br />United Arab Emirates</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaPhoneAlt className="text-white bg-DarkBlue rounded text-4xl p-2" />
        <span className='text-sm '>+971 45284037
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <FaWhatsapp className="text-white bg-DarkBlue text-4xl p-1" />
        <span className='text-sm '>+971 554201838</span>
      </div>
    </div>
  </div>
</div>


      {/* Navigation Menu */}
      <nav className="bg-DarkBlue font-roboto py-7">
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
    {/* Desktop Navigation */}
    <ul className="hidden sm:flex  space-x-3 bg-white py-2 px-10 rounded-full">
        {['Home', 'About Us', 'Freights', 'Services', 'Tools'].map((item) => (
            <li className="relative group" key={item}>
                {item === 'Home' ? (
                    // Link only for 'Home' item
                    <a href="/">
                        <button
                            className={`text-black py-2 px-6 flex items-center min-w-[100px] relative`}
                            onClick={() => setSelectedItem(item)}
                        >
                            {item}
                            <span
                                className={`absolute bottom-0 font-roboto left-0 w-full h-1 bg-DarkBlue transition-opacity duration-300 ${
                                    selectedItem === item || 'group-hover:opacity-100 opacity-0'
                                }`}
                            ></span>
                        </button>
                    </a>
                ) : (
                    // No link for other items
                    <button
                        className={`text-black font-roboto py-2 px-4 flex items-center min-w-[100px] relative`}
                        onClick={() => setSelectedItem(item)}
                    >
                        {item}
                        <FaChevronDown className="ml-2" />
                        <span
                            className={`absolute bottom-0 left-0 w-full h-1 bg-DarkBlue transition-opacity duration-300 ${
                                selectedItem === item || 'group-hover:opacity-100 opacity-0'
                            }`}
                        ></span>
                    </button>
                )}
          

        {/* Dropdown Options based on each item */}
        {item === 'About Us' && (
          <div className="absolute hidden group-hover:flex flex-col z-10 bg-white  text-black   lg:w-[256px] -ml-2   rounded">
           <a href="/whoWeAre" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6 text-left">Who We Are</a>
<a href="/whereinUAE" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6">Where We Operate in UAE</a>
<a href="/operateWorld" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6">Where We Operate in the World</a>
<a href="/missionvisionandvalues" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins px-6">Mission, Vision, and Values</a>

          </div>
        )}
        {item === 'Freights' && (
          <div className="absolute hidden group-hover:flex flex-col z-10 bg-white text-black  shadow-lg p-2  lg:w-[150px] -ml-2 rounded">
            <a href="/airFreight" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins">Air Freight</a>
            <a href="/seaFreight" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins">Sea Freight</a>
            <a href="/roadFreight" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins">Road Freight</a>
          </div>
        )}
        {item === 'Services' && (
          <div className="absolute hidden group-hover:flex flex-col bg-white z-10 text-black shadow-lg  lg:w-[325px] -ml-2 rounded">
            <a href="/stuffingUnloading" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Stuffing Unloading - GVS Cargo & Logistics</a>
            <a href="/lcl" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">LCL - Less Than Container Loaded</a>
            <a href="/fcl" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">FCL- Full Container Loaded</a>
            <a href="/customClearance" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Custom Clearance</a>
            <a href="/dgr" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">DGR-per-Dangerous perishable Products  </a>
            <a href="/inspection" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Inspection</a>
            <a href="/packaging" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Packaging</a>
            <a href="/storage" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Storage</a>
            <a href="/commercial" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">Commercial and logical consultancy</a>
            <a href="/insurance" className="py-3 hover:bg-YellowDark p-2 font-thin text-sm font-poppins  px-6">International Cargo Insurance</a>
          </div>
        )}
        {item === 'Tools' && (
          <div className="absolute hidden group-hover:flex flex-col z-10 font-roboto bg-white text-black shadow-lg rounded">
          <a href="/incoterms" className="py-4 hover:bg-YellowDark px-4 text-sm">Incoterms </a>
            <a href="/container" className="py-4 hover:bg-YellowDark px-4 text-sm">Container</a>
          </div>
        )}
      </li>
    ))}
  </ul>

  {/* Quote Button */}
  <a href='/contactUs'>
  <button className="hidden sm:block bg-white hover:bg-YellowDark   text-black px-24 py-2 rounded-xl">
    Request a Quote
  </button>
  </a>


    {/* Mobile Navigation */}
    <div className="sm:hidden flex flex-col justify-center items-center text-center h-full mx-auto">
  {/* Hamburger Icon */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="text-white bg-gray-800 p-2  px-32 py-5  lg:ml-0 rounded-full flex justify-center items-center focus:outline-none"
  >
    {isOpen ? <FaTimes /> : <FaBars />}
  </button>

  {/* "Request a quote" Button (Permanently Visible) */}


  {/* Dropdown Menu (Conditional) */}
  <div
    className={` w-64 bg-gray-700 rounded-lg shadow-lg z-10 absolute transition-all duration-300 ease-in-out ${
      isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'
    }`}
  >
<div
  className={` w-64 bg-gray-700 rounded-xl shadow-lg z-10 absolute  lg:mt-0 transition-all duration-300 ease-in-out ${
    isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'
  }`}
>
  <ul className="text-white">
    {items.map((item, index) => (
      <li
        key={index}
        className={` border-b border-gray-700 flex flex-col items-start justify-between px-4 py-2 ${
          openDropdown === index ? '' : ''
        }`}
      >
    {item === 'Home' ? (
  <Link to="/" className="w-full">
    <button
      className={`w-full text-left flex items-center justify-between font-bold ${
        openDropdown === index ? 'bg-yellow-500 p-2' : 'bg-transparent'
      }`}
      onClick={() => handleToggleDropdown(index)}
    >
      <span>{item}</span>
    </button>
  </Link>
) : (
  <button
    className={`w-full text-left flex items-center justify-between ${
      openDropdown === index ? 'bg-yellow-500 p-2' : 'bg-transparent'
    }`}
    onClick={() => handleToggleDropdown(index)}
  >
    <span>{item}</span>
    <FaChevronDown className="text-white ml-2" />
  </button>
)}

<div className=''>
        {/* Dropdown menu for various sections */}
        {item === 'Services' && openDropdown === index && (
          <div className="flex flex-col bg-gray-700 text-left text-xs font-roboto items-start text-white  lg:w-[1200px] rounded mt-2">
            <a href="/stuffingUnloading" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">Stuffing Unloading - GVS Cargo & Logistics</a>
            <a href="/lcl" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">LCL - Less Than Container Loaded</a>
            <a href="/customClearance" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">Custom Clearance</a>
            <a href="/dgr" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">DGR-per-Dangerous perishable Products  </a>
            <a href="/inspection" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">Inspection</a>
            <a href="/packaging" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">Packaging</a>
            <a href="/storage" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">Storage</a>
            <a href="/commercial" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">Commercial and logical consultancy</a>
            <a href="/insurance" className="py-3 hover:bg-yellow-500  font-thin text-xs px-1">International Cargo Insurance</a>
          </div>
        )}

        {item === 'Freights' && openDropdown === index && (
          <div className="flex flex-col bg-gray-700 text-left items-start text-white lg:w-[700px] rounded mt-2">
            <a href="/airFreight" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Air Freight</a>
            <a href="/seaFreight" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Sea Freight</a>
            <a href="/roadFreight" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Road Freight</a>
          </div>
        )}

{item === 'Tools' && openDropdown === index && (
  <div className="flex flex-col bg-gray-700 text-left items-start text-white lg:w-[1200px] rounded mt-2">
    <a href="/incoterms" className="block w-full py-3 hover:bg-yellow-500 font-thin lg:w-[1200px] text-xs px-4">IncoTerms</a>
    <a href="/container" className="block w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Containers</a>
  </div>
)}


{item === 'About Us' && openDropdown === index && (
  <div className="flex flex-col bg-gray-700 text-left items-start text-white lg:w-[700px] rounded mt-2">
    <a href="/whoWeAre" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Who We Are</a>
    <a href="/whereinUAE" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Where We Operate in UAE</a>
    <a href="/operateWorld" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Where We Operate in the World</a>
    <a href="/missionvisionandvalues" className="w-full py-3 hover:bg-yellow-500 font-thin text-xs px-4">Mission, Vision, and Values</a>
  </div>
)}

</div>
      </li>
    ))}
  </ul>
</div>


  </div>
  <a href='/contactUs'>
  <button className="mt-4 bg-gray-900 text-white py-2 w-64 rounded-lg shadow-lg focus:outline-none">
    Request a quote
  </button>
  </a>
</div>



  </div>
</nav>
    </div>
  );
};

export default Navbar;
