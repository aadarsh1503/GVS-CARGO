import React from 'react';

function LocationSection() {
  return (
    <div className="flex lg:justify-start  lg:items-start p-4">
      <div className="w-full lg:ml-0 ml-32 max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Location:</h2>
        <p className="text-sm mb-2">Phone: +97145284037 Whatsapp: +971554201838</p>
        {/* Embed Google Map with iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.3010235052775!2d50.52114567541447!3d26.18688427708727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afd0213a19d3%3A0x2f892ffe9e6f0385!2sGlobal%20Vision%20Solutions!5e0!3m2!1sen!2sin!4v1730525796278!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationSection;
