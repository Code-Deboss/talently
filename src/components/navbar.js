import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from './Button'
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navbar, setNavbar] = useState(false);

  const updateNavbar = () => {

    if(window.scrollY > 60) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }

  }

  useEffect(() => {
    updateNavbar();
    window.addEventListener('scroll', updateNavbar);
  })
  
  const navbarData = [
    {
      title: 'Home',
      path: '/'
    },

    {
      title: 'Talents',
      path: '/talents'
    },

    {
      title: 'Scouts',
      path: '/scouts'
    },

    {
      title: 'Trends',
      path: '/trends'
    }
  ]

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className={navbar ? "flex items-center fixed top-0 left-0 right-0 shadow-md justify-between lg:py-3 bg-white p-6 lg:px-24" : "flex top-0 left-0 right-0 items-center justify-between p-6 lg:px-24"} aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to={'/'} className="-m-1.5 p-1.5">
              <span className="sr-only">Talently Logo</span>
              <img
                src={Logo}
                width={'100%'}
                alt="talently logo"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navbarData.map((item) => (
              <Link key={item.title} to={item.path} className="text-sm font-semibold py-2 hover:shadow-sm px-5 hover:text-indigo-500 hover:bg-gray-50 duration-700 rounded-md leading-6 text-gray-900">
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex gap-3 lg:flex-1 lg:justify-end">
            <Link to={'/feed'} className='no-underline'>
              <Button
                buttonClass={'py-3 px-5 rounded-md bg-transparent border border-indigo-500 text-indigo-500 font-normal'}
                buttonText={'Go to feed'}
              />
            </Link>

            <Link to={'/login'} className='no-underline'>
              <Button
                buttonClass={'py-3 px-5 hover:bg-indigo-700 hover:border-indigo-700 duration-700 border border-indigo-500 rounded-md bg-indigo-500 font-normal text-white'}
                buttonText={'Go Started'}
              />
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to={'/'} className="-m-1.5 p-1.5">
                <span className="sr-only">Talently Logo</span>
                <img
                  width={'100%'}
                  src={Logo}
                  alt="talently logo"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navbarData.map((item) => (
                    <Link
                      key={item.title}
                      href={item.path}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to={'/feed'}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Got to feed
                  </Link>

                  <Link
                    to={'/login'}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
}

export default Navbar