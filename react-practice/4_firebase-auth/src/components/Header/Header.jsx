import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <nav className='flex gap-4 py-6 text-xl'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
    </nav>
  )
}
