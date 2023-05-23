import React from 'react'
import Sidebar from '../../components/sidebar'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Feed = () => {

  return (
    <>
      <Sidebar 
        sidebarClass={ 'w-3/12 bg-gray-200 ring-1 p-10 ring-gray-300 h-full fixed left-0 top-0 bottom-0' }

        sidebarLogo={ 
          <Link to={'/'} className='no-underline'>
            <img src={Logo} width={'200'} alt='logo img' />
          </Link>
        }

        sidbarLinkConent={ 
          <div className='mt-6 h-full flex flex-col justify-center gap-3'>
            
          </div>
        }

        sidebarLinkClass={ 'flex flex-col justify-center' }
      />
    </>
  )
}

export default Feed