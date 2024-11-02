import React from 'react';
import Slide from '../Slide/Slide';
import BounceOne from '../BounceOne/BounceOne';
import { useState } from 'react';

function Containers() {
    const [selected, setSelected] = useState('DRY BOX');

    return (
        <div className="font-roboto max-w-6xl mx-auto p-4 lg:p-8 bg-white">
            <div className="flex flex-wrap items-center justify-start space-x-4 space-y-2 lg:space-y-0 cursor-pointer mb-4">
                {['DRY BOX', 'REEFER', 'OPEN TOP', 'FLAT RACK', 'PLATFORM', 'TANK'].map((item) => (
                    <div
                        key={item}
                        className={`font-bold text-xl text-black relative group p-2 rounded-md transition-colors duration-300 ${
                            selected === item ? 'border-b-2 border-black' : 'hover:bg-gray-100'
                        }`}
                        onClick={() => {
                            setSelected(item);
                            document.getElementById('dry-box-photos').classList.toggle('hidden', item !== 'DRY BOX');
                        }}
                    >
                        {item}
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>

            {/* Container to show photos when "DRY BOX" is clicked */}
            <div id="dry-box-photos" className="hidden mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <img src="https://brfreight.com/wp-content/uploads/2023/03/DryBox20.png" alt="Dry Box Photo 1" className="w-full h-auto object-cover rounded-lg shadow" />
                <img src="https://brfreight.com/wp-content/uploads/2023/03/DryBox40.png" alt="Dry Box Photo 2" className="w-full h-auto object-cover rounded-lg shadow" />
                <img src="https://brfreight.com/wp-content/uploads/2023/03/Drybox-Cube.png" alt="Dry Box Photo 3" className="w-full h-auto object-cover rounded-lg shadow" />
            </div>

            <BounceOne />
            <div className='mb-10 mt-10'>
                <Slide />
            </div>
        </div>
    );
}

export default Containers;
