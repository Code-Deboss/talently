import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from './Button'

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
        <nav className={navbar ? "flex fixed top-0 left-0 right-0 bg-white shadow-md items-center justify-between p-3 lg:px-10" : "flex fixed top-0 left-0 right-0 bg-transparent items-center justify-between p-3 lg:px-10"} aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to={'/'} className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
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
          <div className="hidden lg:flex lg:gap-x-12">
            {navbarData.map((item) => (
              <Link key={item.title} to={item.path} className={navbar ? "text-md text-gray-700 font-normal hover:text-sky-600" : "text-md text-white font-normal hover:text-sky-600"}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex gap-2 lg:flex-1 lg:justify-end">
            <Link to={'/login'} className="text-sm font-semibold leading-6">
              <Button buttonColor={'bg-sky-600'} buttonRadius={'rounded-lg'} buttonText={'Log In'} borderStyle={'border-2 border-sky-600'} buttonTextColor={'text-white'} />
            </Link>

            <Link to={'/signup'} className="text-sm font-semibold leading-6">
              <Button buttonColor={'bg-transparent hover:bg-sky-100 duration-700 eas-in'} buttonTextColor={'text-sky-600'} borderStyle={'border-sky-600 border-2'} buttonRadius={'rounded-lg'} buttonText={'Sign Up'} />
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to={'/'} className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
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
                      to={item.path}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to={'/login'}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
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