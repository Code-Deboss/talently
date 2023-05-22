import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

const CallToAction = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 md:py-10 sm:px-6 sm:py-10 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-50 px-6 pt-0 shadow-lg sm:rounded-3xl sm:px-16 md:pt-0 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto w-full lg:mx-0 py-24 flex justify-center items-center">
              <div className='xl:w-2/3 lg:w-full w-full text-center md:w-full'>
                <h2 className="text-2xl xl:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900">
                  Make your talent known. <br/>
                  Start using Talently today.
                </h2>
                <p className="mt-3 xl:text-lg lg:text-lg md:text-lg text-base xl:leading-8 lg:leading-8 md:leading-8 leading-6 text-gray-400">
                  Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                </p>
                <div className="mt-4 flex items-center justify-center gap-x-6">
                  <Link to={'/login'}>
                    <Button 
                      buttonClass={'py-3 px-5 text-base hover:bg-indigo-700 hover:border-indigo-700 border-indigo-500 duration-700 border rounded-md bg-indigo-500 font-normal text-white'}
                      buttonText={'Get Started'}
                    />
                  </Link>
                  <Link to={'/about'} className="text-sm font-semibold leading-6 text-gray-900">
                    <Button 
                      buttonClass={'py-3 px-5 text-base hover:bg-gray-400 hover:border-gray-400 border-gray-300 duration-700 border rounded-md bg-gray-300 font-normal text-gray-900'}
                      buttonText={'Learn more'}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CallToAction