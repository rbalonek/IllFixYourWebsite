import React from 'react'
// import {Animated} from "react-animated-css";
import { Rotate } from "react-awesome-reveal";
import xTool from "../assets/images/RepairX4.webp"

export default function Logo() {
  return (
    <div className='flex text-2xl text-white font-bold'>
      <h1>illFi</h1>
      <Rotate>
        <img className='h-6 mt-1' alt="x" src={xTool} />
      </Rotate>
      <h1>yourwebsite.com</h1>
    </div>
  )
}
