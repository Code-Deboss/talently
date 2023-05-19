import React from 'react'
import { Link } from 'react-router-dom'
import Dancer from '../assets/dancer.png'
import Button from '../../../components/Button'

const CallToAction = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl xl:text-4xl font-bold tracking-tight text-white sm:text-4xl">
                Make your talent known.
                Start using Talently today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link to={'/login'}>
                  <Button 
                    buttonClass={'xl:py-3 px-5 xl:py-3 px-3 py-2 xl:px-5 text-base hover:bg-gray-200 hover:border-gray-200 duration-700 border border-white rounded-md bg-white font-normal text-gray-900'}
                    buttonText={'Get Started'}
                  />
                </Link>
                <Link to={'/about'} className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div>
              <img src={Dancer} width={'100%'} alt='dancer' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CallToAction