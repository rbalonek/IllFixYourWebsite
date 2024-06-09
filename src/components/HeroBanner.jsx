import React, {useState} from 'react'
import { EmailForm } from './EmailForm'

export default function HeroBanner() {
  const [toggleEmailForm, setToggleEmailForm] = useState('hidden')
  const LaunchEmailForm = () => {
    if (toggleEmailForm === 'hidden') {
      setToggleEmailForm('')
      window.scrollTo(0, 0)

    } else {
      setToggleEmailForm('hidden')
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className='flex sm:flex-row justify-around md: flex-col h-5/6 items-center'>
    <div className={toggleEmailForm}>
    <EmailForm handleClick={LaunchEmailForm}  />
    </div>
     


    </div>
  )
}
