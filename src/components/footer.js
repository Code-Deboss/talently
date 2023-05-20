import React from 'react'
import LogoImage from '../assets/logo.png'
import * as BsIcons from 'react-icons/bs'
import { Link } from 'react-router-dom';

const footer = () => {
  
  const socialLinksData = [
    {
      title: 'facebook',
      icon: <BsIcons.BsFacebook />,
      path: '#'
    },

    {
      title: 'twitter',
      icon: <BsIcons.BsTwitter />,
      path: '#'
    },

    {
      title: 'instagram',
      icon: <BsIcons.BsInstagram />,
      path: '#'
    },

    {
      title: 'github',
      icon: <BsIcons.BsGithub />,
      path: '#'
    },

    {
      title: 'linkedin',
      icon: <BsIcons.BsLinkedin />,
      path: '#'
    }
  ];

  const solutionLinks = [
    {
      name: 'Marketing',
      path: '/marketing'
    },

    {
      name: 'Analytics',
      path: '/analytics'
    },

    {
      name: 'Commerce',
      path: '/commerce'
    },

    {
      name: 'Insights',
      path: '/insights'
    }
  ];

  const supportLinks = [
    {
      name: 'Pricing',
      path: '/pricing'
    },

    {
      name: 'Documentation',
      path: '/docs'
    },

    {
      name: 'Guids',
      path: '/guides'
    },

    {
      name: 'API Status',
      path: '/api'
    }
  ];

  const companyLinks = [
    {
      name: 'About',
      path: '/about'
    },

    {
      name: 'Blog',
      path: '/blog'
    },

    {
      name: 'Jobs',
      path: '/jobs'
    },

    {
      name: 'Press',
      path: '/press'
    },

    {
      name: 'Partners',
      path: '/partners'
    }
  ];

  const legalLinks = [
    {
      name: 'Claim',
      path: '/claim'
    },

    {
      name: 'Privacy',
      path: '/privacy'
    },

    {
      name: 'Terms',
      path: '/terms'
    }
  ];

  // get current year

  const dateProperty = new Date();

  const currentYear = dateProperty.getFullYear();

  return (
    <>
      <footer className='pt-24 pb-10 px-20 bg-gray-100 text-gray-900'>
        <div className='xl:flex xl:flex-row border-b pb-24 gap-2'>
          <div className='h-full basis-1/2 flex items-center'>
            <div>
              <div>
                <img src={LogoImage} width={'45%'} alt='talently logo' />
              </div>

              <div className='mt-6'>
                Making the world a better place through constructing <br /> elegant hierarchies.
              </div>

              <div className='mt-6'>
                <div className='flex gap-8'>
                  {socialLinksData.map((data) => {
                    return (
                      <div key={data.title}>
                        <a href={data.path} className='no-underline text-gray-400 text-xl'>
                          {data.icon}
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className='basis-1/2'>
            <div className='grid grid-cols-4 gap-5'>
              <div>
                <h5 className='text-base font-semibold'>
                  Solutions
                </h5>

                {solutionLinks.map((data, index) => {
                  return (
                    <div className='mt-3' key={index}>
                      <Link to={data.path} className='no-decoration text-gray-500 text-sm duration-700 hover:text-gray-900'>
                        {data.name}
                      </Link>
                    </div>
                  )
                })}
              </div>

              <div>
                <h5 className='text-base font-semibold'>
                  Support
                </h5>

                {supportLinks.map((data, index) => {
                  return (
                    <div className='mt-3' key={index}>
                      <Link to={data.path} className='no-decoration text-gray-500 duration-700 text-sm hover:text-gray-900'>
                        {data.name}
                      </Link>
                    </div>
                  )
                })}
              </div>

              <div>
                <h5 className='text-base font-semibold'>
                  Company
                </h5>

                {companyLinks.map((data, index) => {
                  return (
                    <div className='mt-3' key={index}>
                      <Link to={data.path} className='no-decoration text-gray-500 duration-700 text-sm hover:text-gray-900'>
                        {data.name}
                      </Link>
                    </div>
                  )
                })}
              </div>

              <div>
                <h5 className='text-base font-semibold'>
                  Legal
                </h5>

                {legalLinks.map((data, index) => {
                  return (
                    <div className='mt-3' key={index}>
                      <Link to={data.path} className='no-decoration text-gray-500 duration-700 text-sm hover:text-gray-900'>
                        {data.name}
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 text-gray-500'>
          &copy; {currentYear} Talently, Inc. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default footer