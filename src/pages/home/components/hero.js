import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import Hero2 from '../assets/hero2.png'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="relative isolate py-6 px-6 lg:px-24">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className='flex lg:flex-row hero_container items-center'>
            <div className='sm:basis-0 lg:basis-1/2'>
              <h1 className="text-2xl lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Talently, getting your uniquness to the world.
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Talently, we connect promising new talent to trustworthy scouts and the right talent managers. Talent Discovery is as easy and seamless as ordering a cab.
              </p>

              <div className="mt-10 flex gap-x-4">
                <Link to={'/login'}>
                  <Button 
                    buttonClass={'py-3 px-5 hover:bg-indigo-700 hover:border-indigo-700 duration-700 border border-indigo-500 rounded-md bg-indigo-500 font-normal text-white'}

                    buttonText={'Get Strated'}
                  />
                </Link>
                <Link to={'/about'}>
                  <Button 
                    buttonClass={'py-3 px-5 hover:bg-gray-400 hover:border-gray-400 duration-700 border border-gray-300 rounded-md bg-gray-300 font-normal hover:text-black text-gray-900'}
                    buttonText={`Learn more`}
                  />
                </Link>
              </div>
            </div>

            <div className='lg:basis-1/2 sm:block hidden sm:basis-0'>
              <img src={Hero2} width={'70%'} className='mx-auto mt-3' alt={'talantly hero pic'} />
            </div>
          </div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero