import React from 'react'
import { NavLink } from "react-router-dom";

import BeforeAfter from '../components/BeforeAfter/BeforeAfter'
import HeroBanner from '../components/HeroBanner'

import MiltonBefore from "../assets/images/MiltonImages/Milton Before1.jpg"
import MiltonAfter from "../assets/images/MiltonImages/Milton After.gif"
import ACBO1 from "../assets/images/ACBOImages/Member Home.png"
import ACBO2 from "../assets/images/ACBOImages/NBDD Mobile copy.png"
export default function Home() {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div >
      <img className=' w-full' alt='banner' src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1662915920/Portfolio%20Pics/ill%20fix%20your%20website/Screen_Shot_2022-09-11_at_9.58.44_AM_lslvwb.png" />
      </div>
      <HeroBanner />

      <BeforeAfter
        Title="Enterprise Client Revamp"
        Link="https://bincertified.org/"
        BeforeImg={ACBO1}
        AfterImg={ACBO2}
        BoldText="I was given the task of single handedly revamping a 30+ page website for a national recycling bin certification company:"
        ListText={[
          "- Custom Payments and subscription services through Stripe",
          "- Membership signup, member area, and application certification process",
          "- Custom Navigation bar and mobile navigation as well as completely responsive to any device.",

        ]}
        FinalText="Realistically, if I had all the copy and images in advance, I could have finished this site in a weekend, but we made a LOT of changes as the company grew."
      />

      <BeforeAfter
        Title="Author Website Fix"
        Link="https://www.meet-hilton.com/"
        BeforeImg={MiltonBefore}
        AfterImg={MiltonAfter}
        BoldText="I fixed Matthew’s website to be responsive, and gave it a fresh new look with Parrallax Scrolling. Functionally, I improved on or added:"
        ListText={[
          "- Testimonial component with a custom Carousel which allows Video and Text",
          "- Blog component so he can easily add his new publications as well as share them online.",
          "- Added a Wix repeater so he can easily add more books with links to the sales pages with only adding them to a spreadsheet database on Wix",

        ]}
        // FinalText="I had a great time working with Matthew. Once I made the changes to his site, the goal was to make sure that he can update the site whenever he needs, so I made a few tutorials for him to watch if he ever forgets how to update. I am currently on retainer for any updates or adjustments to the site."
      />

      <BeforeAfter
        Title="Graphic Designer Portfolio"
        Link="https://cherry-site.netlify.app/"
        BeforeImg="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1633815706/Portfolio%20Pics/Cherry%20Proj/CherryGif3_zcby89.gif"
        AfterImg="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1633814335/Portfolio%20Pics/Cherry%20Proj/CherryGif1_vdwyf2.gif"
        BoldText="Portfolio project for Graphic Designers:"
        ListText={[
          "- Dynamic and interactive cursor changes adaptive to where you hover.",
          "- Database of backgrounds to randomly play on each new site visit.",
          "- Cascading portfolio pieces and extensive database with meta keywords to organize different categories",

        ]}
        FinalText="Unfortunately, the company no longer exists, but I have permission to show our prototype of the website."
      />
      <div className='p-5 w-100 text-center'>
      <NavLink onClick={scrollToTop} to ="/services"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-3/4 rounded mt-5 w-44'>See all services</button></NavLink>
      </div>

    </div>
  )
}
