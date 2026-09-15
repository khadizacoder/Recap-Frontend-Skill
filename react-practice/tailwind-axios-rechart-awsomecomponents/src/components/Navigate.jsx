import { Menu } from 'lucide-react';
import React, { useState } from 'react'

export const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "Tickets",
    path: "/tickets"
  },
  {
    id: 3,
    name: "Task Status",
    path: "/task-status"
  },
  {
    id: 4,
    name: "Resolved",
    path: "/resolved"
  },
  {
    id: 5,
    name: "About Us",
    path: "/about"
  }
];

const navBar = navItems.map(item => (
  <li key={item.id}><a href={item.path}>{item.name}</a></li>
))

export default function Navigate() {

  const [nav, setNav] = useState(false);

  return (
    <div>
      <div className='bg-blue-200 relative'>
        <div className='mx-auto p-4 flex items-center justify-between relative z-20 bg-blue-200'>
          <div>
            <h2 className='font-semibold text-xl'>Logo</h2>
          </div>

          <div>
            <Menu onClick={() => setNav(!nav)} className='md:hidden cursor-pointer' />
          </div>

          <ul className='hidden md:flex space-x-2.5'>
            {
              navBar
            }
          </ul>
        </div>
      </div>
      <div
        className={`md:hidden absolute left-0 w-full bg-amber-600 text-white p-4 transition-all duration-500 ease-in-out z-10 ${nav ? 'top-15 pointer-events-auto' : '-top-20 pointer-events-none'
          }`}
      >
        <ul className='space-y-2'>
          {
            nav && navBar
          }
        </ul>
      </div>
    </div>
  )
}
