import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Root() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='flex-1 grid grid-cols-[30%_70%]'>
                <Sidebar/>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
