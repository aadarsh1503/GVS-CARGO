import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import aero from "./aero.jpg";
import Truck from "./Truck.png";
import boat from "./boat.jpg";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: 'Air',
      description: 'With safety, speed and transparency, GVS Cargo & Logistics collects, accommodates, ships, tracks and delivers anywhere in the world.',
      src: aero,
      route: "/airFreight", // Set the path for this card
    },
    {
      id: 2,
      title: 'Road',
      description: 'GVS Cargo & Logistics is widely consolidated to offer you its entire infrastructure in road freight transport services.',
      src: Truck,
      route: "/roadFreight", // Set the path for this card
    },
    {
      id: 3,
      title: 'Maritime',
      description: 'We offer the best conditions for chartering ships for special cargo and/or IMO (Cargo of dangerous goods).',
      src: boat,
      route: "/seaFreight", // Set the path for this card
    },
  ];

  return (
    <div className="grid grid-cols-1 mb-10 font-poppins mt-10 md:grid-cols-3 gap-6 w-full mx-auto max-w-5xl">
      {cards.map((card) => (
        <div key={card.id} className="flex flex-col p-3 lg:p-0 items-center rounded-md overflow-hidden">
          <Link to={card.route} className="overflow-hidden transition-transform duration-300 hover:scale-110">
            <img src={card.src} alt={card.title} className="w-full h-56 object-cover" />
          </Link>
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
