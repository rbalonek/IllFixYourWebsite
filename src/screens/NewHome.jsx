import React from 'react'

import Websites from "../assets/images/New Home/Websites.webp"
import DigitalMarketingSolutions from "../assets/images/New Home/Socials.webp"

export default function NewHome() {
  return (
    <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Website Development and Design */}
      <div className="p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-3">Website Development and Design</h2>
        <p>Custom websites using WordPress, Wix, Squarespace, HTML. Advanced applications with React App, React Native. Complete website revamps and modernization.</p>
      </div>
      <div className="p-4">
        <img src={Websites} alt="Website Development and Design"/>
      </div>
      
        {/* Digital Marketing Solutions */}
        <div className="p-4">
        <img src={DigitalMarketingSolutions} alt="Digital Marketing Solutions"/>
    </div>
      <div className="p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-3">Digital Marketing Solutions</h2>
        <p>Enhanced SEO, platform-specific social media strategies, and effective Constant Contact email campaigns.</p>
      </div>
     
      
      {/* Sales and Conversion Optimization */}
      <div className="p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-3">Sales and Conversion Optimization</h2>
        <p>Optimize conversion rates, develop targeted sales funnels, and design high-conversion landing pages.</p>
      </div>
      <div className="p-4">
        <img src="X_X_X_X_X_X_X_X" alt="Sales and Conversion Optimization"/>
      </div>
      
      {/* Analytics and Tracking Installation */}
      <div className="p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-3">Analytics and Tracking Installation</h2>
        <p>Setup and integration of Google Analytics and Facebook Pixel for detailed tracking and insights.</p>
      </div>
      <div className="p-4">
        <img src="X_X_X_X_X_X_X_X" alt="Analytics and Tracking Installation"/>
      </div>
      
      {/* Additional Services */}
      <div className="p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-3">Additional Services</h2>
        <p>Custom solutions tailored to meet any specific business requirements.</p>
      </div>
      <div className="p-4">
        <img src="X_X_X_X_X_X_X_X" alt="Additional Services"/>
      </div>

    </div>
  </div>
  )
}
