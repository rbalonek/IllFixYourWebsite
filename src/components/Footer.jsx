import React from 'react'
import Logo from './Logo'
import { NavLink } from "react-router-dom";
export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className='bg-black  w-100 text-white h-80 md:h-40'>
      
    <div className='flex flex-col pl-5'>
    <NavLink onClick={scrollToTop} to="/"><p className="relative top-5 hover:text-green-500 w-14"> Home</p></NavLink>
    </div>
      
      <div className='flex mt-20 flex-col text-center justify-end md:mt-0'>
      <div className='self-center pb-5'>
      <NavLink onClick={scrollToTop} to="/"><Logo /></NavLink>
      </div>
      <div className='text-xs pb-5 '>
      <a className=" hover:text-green-500 " href="https://robertbalonek.dev/" target="_blank" rel="noreferrer"><p>Ⓒ Robert Balonek 2022</p></a>
      </div>
      </div>
      
    </div>
  )
}

// window.scrollTo(0, 0);