import React from 'react'

import HeroBanner from '../components/HeroBanner'

import Services from './Services';
import ServicesContainer from '../components/ServicesContainer/ServicesContainer';
export default function Home() {



  return (
    <div>
      <div >
      <img className=' w-full' alt='banner' src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1662915920/Portfolio%20Pics/ill%20fix%20your%20website/Screen_Shot_2022-09-11_at_9.58.44_AM_lslvwb.png" />
      </div>
      <HeroBanner />
      <br />
    <ServicesContainer />
     <Services />

    </div>
  )
}
