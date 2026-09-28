import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header/Header'

export default function Root() {
  return (
    <div className='grid grid-col items-center justify-center my-20'>
        <Header />
        <Outlet />

    </div>
  )
}
