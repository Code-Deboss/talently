import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import Img from './assets/logo.png'
import Button from './Button/Button'
import ImgII from "./assets/premium_photo-1683639549573-bcc2db33dc15.avif"

const Signup = () => {
  return (
    <>
      <header className='fixed top-0 left-0 w-full z-[100]  flex items-center justify-around -p-2 px-9 bg-blur-sm  flex-wrap'>
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
         <Link to={'/login'} className='no-underline'>
              <Button
                buttonClass={'xl:py-3 px-3 py-2 xl:px-5 rounded-md bg-transparent border border-indigo-500 text-indigo-500 text-base font-normal'}
                buttonText={'Login'}
              />
            </Link>
       </div>
      </header>
      <main className='h-screen w-full flex items-center flex-wrap justify-items-center flex-row '>
        
        <div className='h-screen w-[45%] flex items-center justify-items-center overflow-hidden img-container'>
          <img src={ImgII} className='w-full h-full object-cover object-center' alt=''/>
        </div>
        <div className='flex items-center justify-items-center h-screen w-[55%] form' >
          <form className='h-[740px]  w-[580px] flex items-start ml-[79px] justify-items-between flex-col '>
            <div>
              <h1 className='text-3xl m-0 font-medium'>Get started</h1>
              <p className='text-sm w-auto text-slate-400'>Create your Account</p>
            </div>
            <div className=' h-[50rem] w-full bg-green-400'>
              <input className='w-full bg-[#F8F7FD] h-16 text-sm rounded-xl border-2px-blue-700  p-7 '
                type='text'
                placeholder='Fullname'
              />
              <input className='w-full bg-[#F8F7FD] h-16 text-sm rounded-xl  border-2px-blue-700  p-7 '
                type='email' 
                placeholder='Email address'
              />
              <input className='w-full bg-[#F8F7FD] h-16 text-sm rounded-xl  border-2px-blue-700 p-7 '
                type='password'
                placeholder='Password'
               />
              <input className='w-full bg-[#F8F7FD] h-16 text-sm rounded-xl  border-2px-blue-700  p-7 '
                type='password'
                placeholder='Confirm password'
              />
            </div>
            <div>
              <p>Select User Type</p>
              <div>
                <input type='checkbox' />
                <h3>Talents</h3>
                <p>I want to showcase my talents here</p>
              </div>
              <div>
                <input type='checkbox' />
                <h3>Scouts</h3>
                <p>I want to see those who are showcasing talents</p>
              </div>
              <div>
                <input type='checkbox' />
                <h3>None</h3>
                <p>I want to be able to vote for talents.</p>
              </div>
            </div>
            <p>By clicking Create my account, you agree to Know Talently <span>User Agreement, Privacy Policy</span>, and <span>Cookie Policy</span></p>
          </form>
        </div>

      </main>
    </>

  )
}

export default Signup