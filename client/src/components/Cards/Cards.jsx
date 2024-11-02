import React from 'react';

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: 'Air',
      description: 'With safety, speed and transparency, BR Freight Shipping collects, accommodates, ships, tracks and delivers anywhere in the world.',
      src: 'https://brfreight.com/wp-content/uploads/2022/06/20220201_li35bhh1-1024x410.jpg',
    },
    {
      id: 2,
      title: 'Road',
      description: 'BR Freight Shipping is widely consolidated to offer you its entire infrastructure in road freight transport services.',
      src: 'https://brfreight.com/wp-content/uploads/2022/06/transporte-rodoviario-de-cargas-1024x640.png',
    },
    {
      id: 3,
      title: 'Maritime',
      description: 'We offer the best conditions for chartering ships for special cargo and/or IMO (Cargo of dangerous goods).',
      src: 'https://brfreight.com/wp-content/uploads/2022/06/ship_night-5d228ea19ef072330cf77c5c6c14eff4857a37d4b157451f4be589b01ea77fda-1024x576.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 mb-10 font-poppins mt-10 md:grid-cols-3 gap-6 w-full mx-auto max-w-5xl">
      {cards.map((card) => (
        <div key={card.id} className="flex flex-col items-center rounded-md overflow-hidden">
          <div className="overflow-hidden transition-transform duration-300 hover:scale-110">
            <img src={card.src} alt={card.title} className="w-full h-56 object-cover" />
          </div>
          <div className="bg-DarkYellow p-6 w-full">
            <h3 className="text-xl font-roboto text-gray-600 text-center font-semibold">{card.title}</h3>
            <p className="text-center text-gray-500 text-base mt-2">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
