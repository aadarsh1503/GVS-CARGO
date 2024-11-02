import React from 'react';
import Bounce from '../Bounce/Bounce';
import Slide from '../Slide/Slide';
import ColorBar from '../Colorbar/Colorbar';

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:max-w-7xl mx-auto items-center px-4 md:px-8 lg:px-16  bg-white">
      <h2 className="text-2xl font-bold mt-12 mb-12 text-center">Who We Are</h2>
      
      <div className="flex flex-col md:flex-row font-poppins gap-8 md:gap-16 lg:gap-24">
        
        <div className="text-gray-500 md:w-1/2 space-y-6 text-justify">
          <p>
            Founded by professionals with extensive experience in the international trade sector, BR Freight Shipping operates in all segments of foreign trade, working side by side with its customers as a service provider, executing each stage of the logistics of exports and imports with professionalism and competence, and providing fast and complete solutions in various types of customs processes and on all continents.
          </p>
          <p>
            In addition to its solid structure, BR Freight Shipping has partnered with the most traditional and competent operators on each continent, establishing very important partnerships with which it now offers an increasingly wider range of services, perfectly suited to the import and export policies of each country, thus operating with greater agility and obtaining results that are more suited to the needs of each of its customers.
          </p>
          <div className="w-full justify-center ">
        <div className="w-96 h-6 lg:mt-32 relative overflow-hidden">
          <div className="absolute inset-0   bg-stripes"></div>
        </div>
      </div>
        </div>
        
        <div className="text-gray-500 md:w-1/2 mb-10 lg:mt-56 space-y-6 text-justify">
        <div className="w-full justify-center   ">
        <div className="w-96 h-6 lg:-mt-56 lg:mb-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-stripes z-0"></div>

        </div>
      </div>
          <p>
            With a team of professionals highly committed to quality excellence, both in customer service and in the development of its services, BR Freight Shipping is constantly improving its staff, concerned with the professional growth of each of its employees, through a daily training and qualification policy, based on the most rigorous international standards.
          </p>
          <p>
            For BR Freight Shipping, this has meant an important consolidation in the international trade market, where it is seen as an icon in this segment, both inside and outside Brazil, achieving complete customer satisfaction in each area in which it operates and building, together with them, several stories of growth, trust, and success.
          </p>
          
        </div>
      </div>
      <Bounce />
      <div className='max-w-7xl mb-10'><Slide />
      </div>
      <ColorBar />
     
    </section>
  );
};

export default AboutSection;
