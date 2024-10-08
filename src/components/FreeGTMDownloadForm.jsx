import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import CryptoJS from 'crypto-js';
// import { useNavigate } from 'react-router-dom';

  

export default function FreeGTMDownloadForm(props) {
  // let navigate = useNavigate();
  const form = useRef();

  const hashEmail = (email) => {
    return CryptoJS.SHA256(email).toString(CryptoJS.enc.Hex);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const emailInput = form.current.elements['reply_to'].value; // Access the email input
    const hashedEmail = hashEmail(emailInput);

    // Push to Data Layer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'emailSubmission',
      'hashedEmail': hashedEmail
    });

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID_2, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        window.location.reload()
        alert("Thanks, check your inbox for the free download!")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="text-gray-800 py-12 flex items-center justify-center bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
      <div className='w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400'>
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <p className='text-gray-800 text-center flex items-center justify-center'>Send me the free Google Tag Manager Template and instructions on setting up a Facebook Pixel and GA4!</p>
          <br />

          <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1">Email</label>
          <input className="mb-4 py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-700" type="email" name="reply_to" required />

          <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Send" />
        </form>
        
        <br />
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={props.handleClick}>Exit</button>
      </div>
    </div>
  )
}
