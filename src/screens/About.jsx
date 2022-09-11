import React, {useState} from 'react'
import { EmailForm } from '../components/EmailForm'

export default function About() {
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
    <div className='text-white min-h-screen flex flex-col align-center '>
      <div className={toggleEmailForm}>
      <EmailForm handleClick={LaunchEmailForm}  />
      </div>
      <h1 className='text-center h-32  mb-5 flex justify-center items-center text-7xl font-extralight'>About</h1>
      <div className='w-11/12 bg-green-700  self-center p-8 shadow-md shadow-black rounded'>
      <p>I'll Fix Your Website was built by Robert Balonek (Link to Dev) after helping hundreds of clients with website design, creation, and bug fixes.</p>
      <br />
      <p>Robert started off in the real estate and performing arts industries in NYC where he built real estate lead, rental, and sales funnels using iWeb, Wix, and Squarespace.</p>
      <br />
      <p>Since then, he has studied more IDEs (Wordpress, Webflow, React ect) as well as learning Ruby on Rails, Javascript, and several other programming languages.</p>
      <br />
      <p>For front end design, he is familiar with Tailwind (which was used to create this website), Bootstrap, CSS, SCSS, and responsive design. </p>
      <br />
      <p>Other services include website pixel and traffic tracking, social media ads and strategy, payment platforms, eCommerce,SEO best practices,  and website testing. </p>
      <br /> 
        <p>Book a free consultation today and see what we can accomplish!</p>
        <br />
        <div className='flex justify-center w-100'>
        <button onClick={LaunchEmailForm} className='shadow-sm shadow-black w-30 max-w-md self-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-3/4 rounded mt-5'>CONTACT</button>
        </div>
      </div>
    </div>
  )
}
