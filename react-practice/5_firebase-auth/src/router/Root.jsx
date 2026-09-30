import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Header/Navbar'

export default function Root() {
  return (
    <div className='grid grid-col items-center justify-center mt-20 text-xl'>
        
        <Navbar />
        <Outlet />

    </div>
  )
}
