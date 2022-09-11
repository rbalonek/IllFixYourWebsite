import React, {useState} from 'react'
import { EmailForm } from '../components/EmailForm'

export default function Services() {
  const [toggleEmailForm, setToggleEmailForm] = useState('hidden')
  const LaunchEmailForm = () => {
    if (toggleEmailForm === 'hidden') {
      setToggleEmailForm('')
    } else {
      setToggleEmailForm('hidden')
    }
  }

  return (
    <div className='text-white min-h-screen'>
      <h1 className='text-center h-32  mb-5 flex justify-center items-center text-7xl font-extralight'>Services</h1>
      <div className={toggleEmailForm}>
      <EmailForm handleClick={LaunchEmailForm} />
      </div>
      <div className='flex justify-around flex-wrap' >
        
        <div className='p-5 w-80 bg-black rounded mb-5 md:w-96 text-center flex flex-col justify-between'>
          <p className=' font-semibold mb-3'>Website Design</p>
          <img alt="design" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1633815706/Portfolio%20Pics/Cherry%20Proj/CherryGif3_zcby89.gif" />
          <button onClick={LaunchEmailForm} className='shadow-sm shadow-black w-30 max-w-md self-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-3/4 rounded mt-5'>CONTACT</button>
        </div>

        <div className='p-5 w-80 bg-black rounded mb-5 md:w-96 text-center flex flex-col justify-between'>
          <p className=' font-semibold mb-3'>Website Revamp</p>
          <img alt="revamp" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1633817208/Portfolio%20Pics/WoodsOne_wcn0qs.png" />
          <button onClick={LaunchEmailForm} className='shadow-sm shadow-black w-30 max-w-md self-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-3/4 rounded mt-5'>CONTACT</button>
        </div>

        <div className='p-5 w-80 bg-black rounded mb-5 md:w-96 text-center flex flex-col justify-between'>
          <p className=' font-semibold mb-3'>Landing Pages</p>
          <img alt="lp" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1634245048/robertbalonek.com/operabob1_juph5a.gif" />
          <button onClick={LaunchEmailForm} className='shadow-sm shadow-black w-30 max-w-md self-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-3/4 rounded mt-5'>CONTACT</button>
        </div>

        <div className='p-5 w-80 bg-black rounded mb-5 md:w-96 text-center flex flex-col justify-between'>
          <p className=' font-semibold mb-3 '>Sales Funnels</p>
          <img className='flex self-center mt-10' alt="funnel" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1662856375/clickfunnels-logo_ytr0uy.webp" />
          <button onClick={LaunchEmailForm} className='shadow-sm shadow-black w-30 max-w-md self-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-3/4 rounded mt-5'>CONTACT</button>
        </div>

        <div className='p-5 w-80 bg-black rounded mb-5 md:w-96 text-center flex flex-col justify-between'>
          <p className=' font-semibold mb-3 '>Google Analytics</p>
          <img className='flex self-center' alt="analytics" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1662856454/GA_ukewad.jpg" />
          <button onClick={LaunchEmailForm} className='shadow-sm shadow-black w-30 max-w-md self-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-3/4 rounded mt-5'>CONTACT</button>
        </div>

        <div className='p-5 w-80 bg-black rounded mb-5 md:w-96 text-center flex flex-col justify-between'>
          <p className=' font-semibold mb-3 '>Pixel tracking installation</p>
          <img className='flex self-center mt-10' alt="pixel" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1662856541/FB_Pixel_nr2ema.png" />
          <button onClick={LaunchEmailForm} className='shadow-sm shadow-black w-30 max-w-md self-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-3/4 rounded mt-5'>CONTACT</button>
        </div>

        <div className='p-5 w-80 bg-black rounded mb-5 md:w-96 text-center flex flex-col justify-between'>
          <p className=' font-semibold mb-3 '>Social Media / Newsletters</p>
          <img className='flex self-center mt-10' alt="pixel" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1662856741/socialmanagement_yjomjp.png" />
          <button onClick={LaunchEmailForm} className='shadow-sm shadow-black w-30 max-w-md self-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-3/4 rounded mt-5'>CONTACT</button>
        </div>
      
      </div>
    </div>
  )
}
