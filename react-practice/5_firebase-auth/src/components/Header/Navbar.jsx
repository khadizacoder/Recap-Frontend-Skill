import React from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <nav className='flex gap-6 py-8'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/login'}>SignUp</NavLink>
    </nav>
  )
}
