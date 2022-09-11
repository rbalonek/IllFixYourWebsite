import React from 'react'

export default function HeroBanner() {
  return (
    <div className='flex sm:flex-row justify-around md: flex-col h-5/6 items-center'>
      <div className='bg-green-700 w-80 h-72 flex flex-col items-center justify-center text-center rounded ml-5 relative top-5 shadow-md shadow-black'>
        <h1 className='text-2xl font-extrabold underline underline-offset-4 text-white pb-3'>I'll Fix Your</h1>
        <ul className='text-sm text-center text-white'>
          <li>Wordpress</li>
          <li>Wix</li>
          <li>Squarespace</li>
          <li>HTML</li>
          <li>React App</li>
          <li>React Native App</li>
          <li>ClickFunels</li>
          <li>And More!</li>
        </ul>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-3/4 rounded mt-5'>Free consultation</button>        
      </div>

<br />
      <div className='bg-green-700 w-80 h-72 flex flex-col items-center justify-center text-center rounded ml-5 relative top-5 shadow-md shadow-black'>
        <h1 className='text-2xl text-white pb-3 font-extrabold underline underline-offset-4'>I'll Help with your</h1>
        <ul className='text-sm text-center text-white'>
        <br />
        <br />
          <li>SEO</li>
          <li>Social Media</li>
          <li>Constant Contact</li>
          <li>Google Analytics</li>
          <li>Pixel Tracking Installation</li>
          
          <br/>
        </ul>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-3/4 rounded mt-5'>Free consultation</button>        
      </div>


    </div>
  )
}
