import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../../components/admin/SideBar';
import Footer from '../../components/Footer';

function Layout() {

  const navigate = useNavigate();
  const logout = () => {
    navigate('/')
  }
  return (

    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        <img src={assets.logo} alt='logo' onClick={() => navigate('/')}  className='w-32 sm:w-40 cursor-pointer'/>

        <button
          onClick={logout}
          className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'
        >
          logout
        </button>
      </div>
      

      {/* sideBar create */}

      <div className='flex h-[calc(100vh-70px)]'>
        <SideBar />
        <Outlet />

      </div>
      <div>
        <Footer />
</div>
      

    </>
  )
}

export default Layout