import React, {useState, useEffect} from 'react'
import Logo from '../Logo'
import { NavLink, useLocation } from "react-router-dom";
import {EmailForm} from "../EmailForm.jsx"
import FreeGTMDownloadForm from '../FreeGTMDownloadForm.jsx';

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
  const [isEmailOrFreeForm, setIsEmailOrFreeForm] =useState("email")

  const [toggleEmailForm, setToggleEmailForm] = useState('hidden')
// eslint-disable-next-line
  const test = () => {
    console.log(navStatusServices,
      navStatusAbout,
      navStatusServicesMobile,
      navStatusAboutMobile)
  }
  
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
      window.scrollTo(0, 0)
      setIsEmailOrFreeForm("email")
    } else {
      setToggleEmailForm('hidden')
      window.scrollTo(0, 0)
    }
  }

  const LaunchFreeForm = () => {
    if (toggleEmailForm === 'hidden') {
      setToggleEmailForm('')
      window.scrollTo(0, 0)
      setIsEmailOrFreeForm("free form")
    } else {
      setToggleEmailForm('hidden')
      window.scrollTo(0, 0)
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
              <p onClick={LaunchEmailForm} className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300 cursor-pointer">Contact Us</p>
              <p onClick={LaunchFreeForm} className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300 cursor-pointer">Free GTM Template</p>
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
          <li><p onClick={LaunchEmailForm} className="block text-sm px-2 py-4 text-white">Contact Us</p></li>
          <li><p onClick={LaunchFreeForm} className="block text-sm px-2 py-4 text-white">Free GTM Template</p></li>
				</ul>
        </div>
      <div className={toggleEmailForm}> 
        {isEmailOrFreeForm === "email" ?
          <>
          <EmailForm handleClick={LaunchEmailForm} />
          </>
          :
          <>
          <FreeGTMDownloadForm handleClick={LaunchEmailForm} />
          </>
          }
        
        </div>
      </nav>
    
  )
}
