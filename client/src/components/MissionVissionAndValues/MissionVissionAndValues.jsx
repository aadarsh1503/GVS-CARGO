import React from 'react'
import Bounce from '../Bounce/Bounce'
import Slide from '../Slide/Slide'
import ColorBar from '../Colorbar/Colorbar'

const MissionVissionAndValues = () => {
  return (
    <div>
    <div className="flex justify-around max-w-6xl mx-auto lg:mb-20 items-start text-center lg:mt-32 text-GrayDark py-16">
    {/* Mission Section */}
    <div className="w-1/3">
      <h2 className="text-4xl font-bold tracking-wider mb-4">MISSION</h2>
      <p className="text-base ">
        Provision of logistics services with resources that combine personal attention for the best result in the
        completion of the operation, ensuring the customer peace of mind, comfort and confidence in the care of their shipments.
      </p>
    </div>

    {/* Vision Section */}
    <div className="w-1/3">
      <h2 className="text-4xl font-bold tracking-wider mb-4">VISION</h2>
      <p className="text-base">
        To be recognized in the national and international market as a strong option for logistics services,
        using ethical values and achieving total customer satisfaction.
      </p>
    </div>

    {/* Values Section */}
    <div className="w-1/3">
      <h2 className="text-4xl font-bold tracking-wider mb-4">VALUES</h2>
      <p className="text-base">
        Integrity – Being honest with yourself, with others and with the law;< br />
        Responsibility – Taking and complying;<br />
        Excellence – Overcoming to surprise;<br />
        Competence – making the best decision for the best result.
      </p>
    </div>
   
  </div>
  <Bounce />
  <div className=' mb-10 mt-10'>
    <Slide />
  </div>
 
  <ColorBar />

  </div>
    
  )
}

export default MissionVissionAndValues