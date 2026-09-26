import React from 'react'
import Navbar from '../../components/Header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'

export default function Root() {

  return (
    <div className='bg-white text-gray-800'>
      <div className='max-w-6xl w-11/12 mx-auto flex flex-col min-h-screen'>
        <Navbar />

        <main className='flex-1'>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}
