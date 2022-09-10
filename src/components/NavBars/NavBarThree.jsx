import React, {useState} from 'react'
import Logo from '../Logo'

export default function NavBarThree() {
const [mobileToggle, setMobileToggle] = useState("hidden")
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
						
							<a href="#" class="flex py-4 px-2">
								<Logo />
							</a>
						</div>
					
						<div class="hidden md:flex items-end space-x-5">
							<a href="" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
							<a href="" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Services</a>
							<a href="" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">About</a>
							<a href="" className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
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
					<li className="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
        </div>
        
        
      </nav>
    </div>
  )
}
