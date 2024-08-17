import React, { useEffect, useState } from 'react';

export default function FeatureTestScreen() {
  const [fbc, setFbc] = useState('Unknown');

  useEffect(() => {
    // Log URL parameters for debugging
    console.log(window.location.search);

    const urlParams = new URLSearchParams(window.location.search);
    const fbcFromUrl = urlParams.get('fbclid') || 'Unknown';

    console.log('Extracted fbclid:', fbcFromUrl); // Debugging line
    setFbc(fbcFromUrl);
  }, []);

  const handleClick = () => {
    const phoneNumber = '5857212210'; // Your WhatsApp number
    const message = `Hello, my Pixel ID is: ${encodeURIComponent(fbc)}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect to WhatsApp with the pre-filled message
    window.location.href = whatsappUrl;
  };

  return (
    <div className='text-white min-h-screen flex flex-col align-center justify-center items-center'>
      
      <button onClick={handleClick} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5 shadow-md'>
        Contact Us on WhatsApp
      </button>
    </div>
  );
}
// <button id="test-purchase-button" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-2/3 rounded mt-5 shadow-md shadow-black contact-btn'>
//         Purchase
//       </button>