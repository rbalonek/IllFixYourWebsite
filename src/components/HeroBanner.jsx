import React, {useState} from 'react'
import { EmailForm } from './EmailForm'

export default function HeroBanner() {
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

  return (
    <div className='flex sm:flex-row justify-around md: flex-col h-5/6 items-center'>
    <div className={toggleEmailForm}>
    <EmailForm handleClick={LaunchEmailForm}  />
    </div>
      <div className='bg-green-700 w-72 h-96 flex flex-col items-center justify-around text-center rounded relative top-5 shadow-md shadow-black'>
        <h1 className='text-2xl font-extrabold underline underline-offset-4 text-white pb-3'>I'll Fix Your</h1>
        <ul className='text-sm text-center text-white shadow-md shadow-white p-2 relative top-2 rounded'>
          <li>Wordpress</li>
          <li>Wix</li>
          <li>Squarespace</li>
          <li>HTML</li>
          <li>React App</li>
          <li>React Native App</li>
          <li>ClickFunels</li>
          <li>And More!</li>
        </ul>
      <button onClick={LaunchEmailForm} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-2/3 rounded mt-5 shadow-md shadow-black contact-btn'>Free consultation</button>        
      </div>

<br />
      <div className='bg-green-700 w-72 h-96 flex flex-col items-center justify-around text-center rounded relative top-5 shadow-md shadow-black'>
        <h1 className='text-2xl text-white pb-3 font-extrabold underline underline-offset-4'>I'll Help with your</h1>
       
        <ul className='text-sm text-center text-white shadow-md shadow-white p-2 relative top-2 rounded'>
          <li>SEO</li>
          <li>Social Media</li>
          <li>Constant Contact</li>
          <li>Google Analytics</li>
          <li>Pixel Tracking Installation</li>
          
          <br/>
        </ul>
      <button onClick={LaunchEmailForm} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-2/3 rounded mt-5 shadow-md shadow-black contact-btn'>Free consultation</button>        
      </div>


    </div>
  )
}
