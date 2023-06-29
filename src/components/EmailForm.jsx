import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'

export const EmailForm = (props) => {
  let navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        navigate('/'); ///OR TY Message?
        window.scrollTo(0, 0)
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="text-gray-800  py-12 flex items-center justify-center bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
      <div className=' w-4/6 relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400'>
      <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
  <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1">Name</label>
  <input className="mb-4 py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-700" type="text" name="to_name" required />

  <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1">Email</label>
  <input className="mb-4 py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-700" type="email" name="reply_to" required />

  <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-1">Message</label>
  <textarea className="mb-4 py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-indigo-700" name="message" required />

  <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Send" />
</form>

        <br />
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={props.handleClick}>Exit</button>
      </div>
    </div>
  );
};