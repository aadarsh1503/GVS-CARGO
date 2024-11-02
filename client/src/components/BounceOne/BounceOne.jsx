import React from 'react';

const BounceOne = () => {
  const projects = [
    { title: 'PICKUP AND DELIVERY', src: 'https://brfreight.com/wp-content/uploads/2022/07/frente-do-caminhao-de-entrega.png' },
    { title: 'STUFFING & CONTAINER', src: 'https://brfreight.com/wp-content/uploads/2022/07/empilhadeira.png' },
    { title: 'SWAPNING & CONTAINER', src: 'https://brfreight.com/wp-content/uploads/2022/07/caminhao-de-entrega.png' },
    { title: 'BOARDING COMP.', src: 'https://brfreight.com/wp-content/uploads/2022/07/container.png' },
    { title: 'PERISHABLE PRODUCTS', src: 'https://brfreight.com/wp-content/uploads/2022/07/caracteristicas.png' },
    { title: 'IMO PRODUCTS', src: 'https://brfreight.com/wp-content/uploads/2022/07/desenvolvimento-de-produto.png' },
    { title: 'CARGO CONSOLIDATION', src: 'https://brfreight.com/wp-content/uploads/2022/07/armazem.png' },
    { title: 'INTERNATIONAL DESTINATIONS', src: 'https://brfreight.com/wp-content/uploads/2022/07/localizacao.png' },
  ];

  return (
    <section className="text-center max-w-5xl font-roboto mx-auto py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-black mb-8">
        Our Projects< br />
        <span className='text-Graytext text-xl mt-2'>They Include:</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={project.src}
              alt={project.title}
              className="h-32 w-32 mb-4  object-contain" // Apply the animation class
            />
            <p className="text-yellow-400 lg:w-[800px] font-bold text-center">{project.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BounceOne;
