import React from 'react'

export default function BeforeAfter(props) {
  return (
    <div
      className='pt-12 pb-6'
    >
      <a href={props.Link} target="_blank"><h1 className='text-center text-2xl font-extrabold underline underline-offset-4 text-white pb-5 hover:text-blue-300'>{ props.Title }</h1></a>
      <div className='flex flex-col items-center'>
        
        
        
        {/* Container for Project */}
        <div className=' w-11/12 w-sm-container h-sm-container md:w-md-container md:h-md-container  lg:h-lg-conatiner lg:w-lg-conatiner border-2 flex flex-col between shadow-md shadow-black bg-white rounded'>
          {/* Top 2 halves */}
          <div
            // style={{display:'flex' ,width:"100%", height:'70%'}}
            className='flex w-100 h-1/2 lg:h-2/3  '
          >
            
            <div
              className='flex justify-center items-center h-100 w-1/2 border-r-2 bg-white '
            >
              <img className='h-auto max-h-full w-100' src={props.BeforeImg} alt={props.BeforeImg} />
            </div>

            <div
              className='flex justify-center items-center h-100 w-1/2 bg-white'
            >
            <img className='h-auto max-h-full ' src={props.AfterImg} alt={props.AfterImg} />
            </div>

            </div>
          {/* END Top 2 halves */}
          
            {/* Bottom 1/3 full width */}
          <div
            className='h-1/2 lg:h-1/3 w-10/12 self-center flex flex-column border-t-2 bg-white'> 
            <div className='text-xs lg:text-sm  w-100 h-100 font-serif xl:text-base pt-2 pl-2 pr-2'>
              <p className='font-semibold'>{ props.BoldText}</p>
              <br />
              {props.ListText.length && (
                <>
                  {props.ListText.map((text, index) => (
                      <p key={props.Title + index}>{text}</p>
                ))}
                </>
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
