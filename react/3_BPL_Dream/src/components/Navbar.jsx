import React from 'react'
import Logo from '../assets/logo.png'
import Currency from '../assets/Currency.png'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  const navBar = [
    {id: 1, name: "Home"},
    {id: 2, name: "Fixture"},
    {id: 3, name: "Teams"},
    {id: 4, name: "Schedules"}
  ]

  return (
    <div>
        <div className='w-11/12 max-w-screen-xl mx-auto py-3 flex items-center justify-between'>
            <div>
                <img src={Logo} alt="logo" className='w-15' />
            </div>
            <div className='flex gap-4 items-center'>
                <div className='flex gap-3'>
                  {
                    navBar.map(item => (
                      <span key={item.id} className='cursor-pointer text-[#131313]'>
                        {item.name}
                      </span>
                    ))
                  }
                </div>
                <div className='flex items-center gap-2 border-1 p-2 border-gray-200 rounded-lg font-medium'>
                  <p>0 Coin</p>
                  <img src={Currency} alt="currency" />
                </div>
            </div>
        </div>
    </div>
  )
}
