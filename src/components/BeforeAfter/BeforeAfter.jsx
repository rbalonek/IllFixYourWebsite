import React from 'react'
import MiltonBefore from "../../assets/images/MiltonImages/Milton Before1.jpg"
import MiltonAfter from "../../assets/images/MiltonImages/Milton After.gif"

export default function BeforeAfter() {
  return (
    <div
      className='pt-12 pb-6'
    >
      <div className='flex flex-col items-center'>
        
        
        
        {/* Container for Project */}
        <div className=' w-sm-container h-sm-container md:w-md-container md:h-md-container  lg:h-lg-conatiner lg:w-lg-conatiner border-2 flex flex-col betwee '>
          {/* Top 2 halves */}
          <div
            // style={{display:'flex' ,width:"100%", height:'70%'}}
            className='flex w-100 h-1/2 lg:h-2/3  '
          >
            
            <div
              className='flex justify-center items-center h-100 w-1/2 border-r-2'
            >
              <img className='h-auto w-11/12' src={MiltonBefore} />
            </div>

            <div
              className='flex justify-center items-center h-100 w-1/2 '
            >
            <img className='h-auto w-11/12' src={MiltonAfter} />
            </div>

            </div>
          {/* END Top 2 halves */}
          
            {/* Bottom 1/3 full width */}
          <div
            className='h-1/2 lg:h-1/3 w-100 flex flex-column border-t-2 '> 
            <div className='text-xs lg:text-sm  w-100 h-100 font-serif xl:text-base pt-2 pl-2 pr-2'>
              <p className='font-semibold'>I fixed Matthew’s website to be responsive, and gave it a fresh new look with Parrallax Scrolling. Functionally, I improved on or added:</p>
              <br />
              <p>- Testimonial component with a custom Carousel which allows Video and Text</p>
              <p>- Blog component so he can easily add his new publications as well as share them online.</p>
              <p>- Added a Wix repeater so he can easily add more books with links to the sales pages with only adding them to a spreadsheet database on Wix</p>
              <br />
              <p>I had a great time working with Matthew. Once I made the changes to his site, the goal was to make sure that he can update the site whenever he needs, so I made a few tutorials for him to watch if he ever forgets how to update. I am currently on retainer for any updates or adjustments to the site. </p>
            </div>
          </div>

        </div>



        
        
      </div>
    </div>
  )
}
