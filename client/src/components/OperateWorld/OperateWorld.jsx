import React from 'react';
import Bounce from '../Bounce/Bounce';
import Slide from '../Slide/Slide';
import ColorBar from '../Colorbar/Colorbar';

const OperateWorld = () => {
  return (
    <section className="flex flex-col  lg:max-w-8xl mx-auto items-center px-4 md:px-8 lg:px-16 bg-white">
  <h1 className='text-3xl font-poppins text-center mt-6 lg:mt-40 mb-6 lg:mb-32 font-bold'>Where we operate in World:</h1>
  <p className='text-gray-500 lg:mb-32 font-poppins text-center'>
    BR Freight Shipping is constantly growing in its area of operation, whether through the opening of new branches or important and strategic partnerships with the most renowned companies on each continent. In this way, it offers all its customers a fast, safe, and personalized service, whether for imports, exports, or obtaining all solutions for customs clearance.
  </p>
  <img src="https://brfreight.com/wp-content/uploads/2018/06/estrutura-no-mundo-768x534.png" alt="Descriptive Alt Text" className="mx-auto mb-6" />
  <Bounce />
  <div className='lg:max-w-7xl lg:w-full w-96 mb-10'>
    <Slide />
  </div>
  <ColorBar />
</section>

  );
};

export default OperateWorld;
