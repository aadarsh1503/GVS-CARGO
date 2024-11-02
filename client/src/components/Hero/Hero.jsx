import React from 'react'
import Slide from '../Slide/Slide'
import Cards from '../Cards/Cards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FaMapMarkedAlt,FaGlobeAfrica } from 'react-icons/fa';


import OurServices from '../OurServices/OurServices';
import { useTranslation } from 'react-i18next';
import Weperate from '../Weperate/Weperate';


const Hero = () => {
  const { t } = useTranslation();
  return (
    
    <div>
      
    
      <div
            className='text-white font-roboto lg:text-6xl text-5xl  py-32  lg:py-72 text-center min-h-screen font-bold bg-black'
            style={{
                backgroundImage: 'url("https://brfreight.com/wp-content/uploads/2022/06/banner-logisticas-.jpg")', // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            WE SEND FOR YOU!
            <h1 className="lg:text-2xl text-xl font-roboto text-center flex items-center mt-4 justify-center">
                <FontAwesomeIcon icon={faAngleDoubleRight} className="text-lg text-yellow-300 mx-2" />
                Air <FontAwesomeIcon icon={faAngleDoubleRight} className="text-lg text-yellow-300 mx-2" />
                Maritime <FontAwesomeIcon icon={faAngleDoubleRight} className="text-lg text-yellow-300 mx-2" />
                Road
            </h1>
        </div>
         <section className="flex max-w-7xl mx-auto flex-col md:flex-row items-center justify-between py-12 px-6 md:px-24 bg-white">
        <div className="max-w-lg md:w-1/2 space-y-4">
          <p className="text-gray-500 font-roboto leading-relaxed">
          Founded by professionals with extensive experience in the
international trade sector, BR Freight Shipping
operates in all segments of foreign trade,
working side by side with its customers as a
service provider, executing
each stage of the logistics
of exports and imports with professionalism and competence, and providing fast and complete solutions
in various types of customs processes and
on all continents.
          </p>
          <button className="bg-yellow-400 lg:ml-56 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition duration-300">
            Contact Us
          </button>
        </div>
        

        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <img src="https://brfreight.com/wp-content/uploads/2022/06/imgSobre.png" alt="Shipping Illustration" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0  rounded-full"
              style={{ clipPath: 'circle(50% at 50% 50%)' }}
            ></div>
          </div>
        </div>
      </section>
      <Slide />
      <Cards />
     


      <Weperate />
      <OurServices />
    </div>
  )
}

export default Hero