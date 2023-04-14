import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/admin/Navbar'

const Admin = () => {
  
  return (
    <div className='h-[100vh]'>
        <Navbar />
        <div className='w-[100%] h-[100%]  flex'>
            <div className='w-[300px] h-[100%] border-[1px] border-r-[gray]'></div>
            <div className='w-[100%] h-[100%]'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Admin