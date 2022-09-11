import React from 'react'
import Logo from './Logo'
import { NavLink } from "react-router-dom";
export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className='bg-black h-40 w-100 text-white'>
      
    <div className='flex flex-col pl-5'>
    <NavLink onClick={scrollToTop} to="/"><p className="relative top-5 hover:text-green-500 w-14"> Home</p></NavLink>
    <p className="relative top-7 hover:text-green-500 w-14"><NavLink onClick={scrollToTop} to="/services"> Services </NavLink></p>
    <p className="relative top-9 hover:text-green-500 w-14"><NavLink onClick={scrollToTop} to="/about"> About </NavLink></p>
    </div>
      
      <div className='flex flex-col text-center justify-end'>
      <div className='self-center pb-5'>
      <NavLink onClick={scrollToTop} to="/"><Logo /></NavLink>
      </div>
      <div className='text-xs pb-5'>
      <a className=" hover:text-green-500 " href="https://robertbalonek.dev/" target="_blank"><p>Ⓒ Robert Balonek 2022</p></a>
      </div>
      </div>
      
    </div>
  )
}

// window.scrollTo(0, 0);