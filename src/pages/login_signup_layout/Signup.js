import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import Img from './logo.png'
import Button from './Button/Button'

const Signup = () => {
  return (
    <>
      <header className='fixed top-0 left-0 w-full z-[100]  flex items-center justify-around -p-2 px-9 bg-blur-sm shadow-md flex-wrap'>
       <div className=''>
        <Link to={'/'} className="-m-1.5 p-1.5">
              <span className="sr-only">Talently Logo</span>
              <img
                src={Img}
                width={'80%'}
                alt="talently logo"
              />
            </Link>
       </div>
       <div className=''>
         <Link to={'/signup'} className='no-underline'>
              <Button
                buttonClass={'xl:py-3 px-3 py-2 xl:px-5 rounded-md bg-transparent border border-indigo-500 text-indigo-500 text-base font-normal'}
                buttonText={'Login'}
              />
            </Link>
       </div>
      </header>
      <main className='h-screen w-full bg-blue-200 flex items-center flex-wrap justify-items-center flex-row'>
        
        <div className='h-screen w-5/12 bg-red-200'>
          
        </div>
        <div>
          
        </div>

      </main>
    </>

  )
}

export default Signup