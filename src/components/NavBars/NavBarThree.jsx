import React, {useState, useEffect} from 'react'
import Logo from '../Logo'
import { NavLink, useLocation } from "react-router-dom";
import {EmailForm} from "../EmailForm.jsx"

export default function NavBarThree() {
  const location = useLocation();
  const isOnPage = "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
  const isNotOnPage = "py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
  const isOnPageMobile = "block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
  const isNotOnPageMobile = "block text-sm px-2 py-4 text-white "
  
  const [mobileToggle, setMobileToggle] = useState("hidden")
  const [navStatusHome, setNavStatusHome] = useState(isNotOnPage)
  const [navStatusServices, setNavStatusServices] = useState(isNotOnPage)
  const [navStatusAbout, setNavStatusAbout] = useState(isNotOnPage)

  const [navStatusHomeMobile, setNavStatusHomeMobile] = useState(isNotOnPageMobile)
  const [navStatusServicesMobile, setNavStatusServicesMobile] = useState(isNotOnPageMobile)
  const [navStatusAboutMobile, setNavStatusAboutMobile] = useState(isNotOnPageMobile)

  const [toggleEmailForm, setToggleEmailForm] = useState('hidden')

  useEffect(() => {
    if (location.pathname === "/") {
      setNavStatusHome(isOnPage)
      setNavStatusAbout(isNotOnPage)
      setNavStatusServices(isNotOnPage)

      setNavStatusHomeMobile(isOnPageMobile)
      setNavStatusAboutMobile(isNotOnPageMobile)
      setNavStatusServicesMobile(isNotOnPageMobile)

      setMobileToggle("hidden")

    } else if (location.pathname === "/services") {
      setNavStatusServices(isOnPage)
      setNavStatusAbout(isNotOnPage)
      setNavStatusHome(isNotOnPage)

      setNavStatusServicesMobile(isOnPageMobile)
      setNavStatusAboutMobile(isNotOnPageMobile)
      setNavStatusHomeMobile(isNotOnPageMobile)

      setMobileToggle("hidden")

    } else if(location.pathname === "/about") {
      setNavStatusAbout(isOnPage)
      setNavStatusHome(isNotOnPage)
      setNavStatusServices(isNotOnPage)

      setNavStatusAboutMobile(isOnPageMobile)
      setNavStatusHomeMobile(isNotOnPageMobile)
      setNavStatusServicesMobile(isNotOnPageMobile)

      setMobileToggle("hidden")

    }
  }, [location.pathname])
  
  
  const navToggle = () => {
    if( mobileToggle === "hidden"){
      setMobileToggle("mobile-menu ")
    } else {
      setMobileToggle("hidden")
    }
  }
  
  const LaunchEmailForm = () => {
    if (toggleEmailForm === 'hidden') {
      setToggleEmailForm('')
    } else {
      setToggleEmailForm('hidden')
    }
  }

  return (
    
		<nav className=" pb-2 bg-blue-500 shadow-lg ">
			<div className=" ">
				<div className="flex">
					<div className="flex w-full justify-around">
						<div>
						
							<a href="/" className="flex py-4 px-2">
								<Logo />
							</a>
						</div>
					
						<div className="hidden md:flex items-end space-x-5">
            <NavLink to="/"><p className={navStatusHome}> Home</p></NavLink>
              <p className={navStatusServices}><NavLink to="/services"> Services </NavLink></p>
							<p className={navStatusAbout}><NavLink to="/about"> About </NavLink></p>
							<p onClick={LaunchEmailForm} className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300 cursor-pointer">Contact Us</p>
              </div>
              
					</div>
				
			
					
					<div className="md:hidden flex items-center">
              <button onClick={navToggle} className="outline-none mobile-menu-button text-white pr-5">
						<svg className=" w-6 h-6 text-white-100 "
							x-show="showMenu"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			
			<div className={mobileToggle}>
				<ul className="">
					<li><NavLink to="/"><p className={navStatusHomeMobile}>Home</p></NavLink></li>
            <li><NavLink to="/services"><p className={navStatusServicesMobile}> Services </p></NavLink></li>
            <li><NavLink to="/about"> <p className={navStatusAboutMobile}>About</p> </NavLink></li>
					<li><p onClick={LaunchEmailForm} className="block text-sm px-2 py-4 text-white">Contact Us</p></li>
				</ul>
        </div>
        <div className={toggleEmailForm}>
          <EmailForm handleClick={LaunchEmailForm} />
        </div>
      </nav>
    
  )
}
