import React, {useState} from 'react';
import { EmailForm } from '../EmailForm';

export default function ServicesContainer() {
  const [toggleEmailForm, setToggleEmailForm] = useState('hidden')

  const LaunchEmailForm = () => {
      if (toggleEmailForm === 'hidden') {
        setToggleEmailForm('')
        window.scrollTo(0, 0)
      } else {
        setToggleEmailForm('hidden')
        window.scrollTo(0, 0)
      }
  }
  
  const services = [
    "WordPress", "Wix", "Squarespace", "HTML",
    "React App", "React Native App", "ClickFunnels",
    "SEO", "Social Media", "Constant Contact",
    "Google Analytics", "Pixel Tracking Installation",
    "And More!"
  ];

  return (
    <div className="w-full px-4 mb-8 lg:mb-0 mx-auto max-w-[760px]"> {/* Increased max-width to accommodate two columns */}
    <div className={toggleEmailForm}>
    <EmailForm handleClick={LaunchEmailForm} />
    </div>
      <div className="max-w-full lg:max-w-none mx-auto pt-10 px-10 pb-8 bg-gray-100 rounded-3xl">
        <div className="text-center mb-6">
          <h5 className="text-2xl font-semibold text-gray-800 mb-3">I'll Fix Your:</h5>
        </div>
        <div className="flex flex-wrap justify-between"> {/* Added flex-wrap for responsive adjustment */}
          <ul className="w-1/2"> {/* Adjusted to take half the width */}
            {services.slice(0, Math.ceil(services.length / 2)).map((service, index) => (
              <li key={index} className="flex mb-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-6 h-6 fill-current text-gray-800">
                  <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
                </svg>
                <span className="ml-2 text-gray-800">{service}</span>
              </li>
            ))}
          </ul>
          <ul className="w-1/2"> {/* Adjusted to take half the width */}
            {services.slice(Math.ceil(services.length / 2)).map((service, index) => (
              <li key={index} className="flex mb-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-6 h-6 fill-current text-gray-800">
                  <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
                </svg>
                <span className="ml-2 text-gray-800">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <a onClick={LaunchEmailForm}  className="cursor-pointer relative group inline-block w-full py-4 px-6 text-center text-gray-800 hover:text-gray-50 bg-yellow-300 font-semibold rounded-full overflow-hidden transition duration-200">
          <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
          <span className="relative">Set up a free consultation</span>
        </a>
      </div>
    </div>
  );
}
