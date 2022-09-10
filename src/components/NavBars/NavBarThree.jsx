import React, {useState, useEffect} from 'react'
import Logo from '../Logo'
import { NavLink, useLocation } from "react-router-dom";

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


  useEffect(() => {
    if (location.pathname === "/") {
      setNavStatusHome(isOnPage)
      setNavStatusAbout(isNotOnPage)
      setNavStatusServices(isNotOnPage)

      setNavStatusHomeMobile(isOnPageMobile)
      setNavStatusAboutMobile(isNotOnPageMobile)
      setNavStatusServicesMobile(isNotOnPageMobile)

    } else if (location.pathname === "/services") {
      setNavStatusServices(isOnPage)
      setNavStatusAbout(isNotOnPage)
      setNavStatusHome(isNotOnPage)

      setNavStatusServicesMobile(isOnPageMobile)
      setNavStatusAboutMobile(isNotOnPageMobile)
      setNavStatusHomeMobile(isNotOnPageMobile)

    } else if(location.pathname === "/about") {
      setNavStatusAbout(isOnPage)
      setNavStatusHome(isNotOnPage)
      setNavStatusServices(isNotOnPage)

      setNavStatusAboutMobile(isOnPageMobile)
      setNavStatusHomeMobile(isNotOnPageMobile)
      setNavStatusServicesMobile(isNotOnPageMobile)

    }
  }, [location.pathname])
  
  
  const navToggle = () => {
    if( mobileToggle === "hidden"){
      setMobileToggle("mobile-menu ")
    } else {
      setMobileToggle("hidden")
    }
 }
  return (
    <div className=''>
    
		<nav className=" bg-blue-500 shadow-lg md: ">
			<div className=" ">
				<div className="flex">
					<div className="flex w-full justify-around">
						<div>
						
							<a href="/" class="flex py-4 px-2">
								<Logo />
							</a>
						</div>
					
						<div class="hidden md:flex items-end space-x-5">
              <p className={navStatusHome}> <NavLink to="/">Home</NavLink></p>
              <p className={navStatusServices}><NavLink to="/services"> Services </NavLink></p>
							<p className={navStatusAbout}><NavLink to="/about"> About </NavLink></p>
							<p href="" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Contact Us</p>
              </div>
              
					</div>
				
			
					
					<div className="md:hidden flex items-center">
              <button onClick={navToggle} class="outline-none mobile-menu-button text-white pr-5">
						<svg class=" w-6 h-6 text-white-100 hover:text-green-500 "
							x-show="showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
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
					<li><p className={navStatusHomeMobile}><NavLink to="/">Home</NavLink></p></li>
            <li><p  className={navStatusServicesMobile}><NavLink to="/services"> Services </NavLink></p></li>
            <li><p className={navStatusAboutMobile}><NavLink to="/about"> About </NavLink></p></li>
					<li><p className="block text-sm px-2 py-4 text-white hover:bg-green-500 transition duration-300">Contact Us</p></li>
				</ul>
        </div>
        
        
      </nav>
    </div>
  )
}
