import React from 'react'

export default function BeforeAfter(props) {
  return (
    <div
      className='
      pt-12
       pb-6
        text-white
        '
    >
      <a href={props.Link} target="_blank" rel="noreferrer"><h1 className='text-center text-2xl font-extrabold underline underline-offset-4 text-white pb-5 hover:text-blue-300'>{ props.Title }</h1></a>
      <div className='flex flex-col items-center md:h-max'>
        
        
        
        {/* Container for Project */}
        <div className=' p-5 md:w-md-container md:h-md-container  lg:h-lg-conatiner lg:w-lg-conatiner  flex flex-col justify-end shadow-md shadow-black bg-green-700 rounded'>
          {/* Top 2 halves */}
          <div
            // style={{display:'flex' ,width:"100%", height:'70%'}}
            className='flex w-100 h-1/2 lg:h-2/3  '
          >
            
            <div
              className='flex justify-center items-center md:h-100 w-1/2  bg-green-700 p-5'
            >
              <img className='h-auto max-h-full w-100 ' src={props.BeforeImg} alt={props.BeforeImg} />
            </div>

            <div
              className='flex justify-center items-center md:h-100 w-1/2 bg-green-700 p-5'
            >
            <img className='h-auto max-h-44 md:max-h-full ' src={props.AfterImg} alt={props.AfterImg} />
            </div>

            </div>
          {/* END Top 2 halves */}
          
            {/* Bottom 1/3 full width */}
          <div
            className='h-1/2 lg:h-1/3 w-11/12 self-center flex flex-column justify-center  bg-green-700  '> 
            <div className='text-sm lg:text-sm  w-100 h-100 font-serif xl:text-base  pl-2 pr-2 self-center'>
              <p className='font-semibold  border-white'>{ props.BoldText}</p>
              <br />
              {props.ListText.length && (
                <div>
                  {props.ListText.map((text, index) => (
                      <p key={props.Title + index}>{text}</p>
                ))}
                </div>
              )}
              <br />
              <p>{props.FinalText}</p>
            </div>
          </div>

        </div>



        
        
      </div>
    </div>
  )
}
