import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  const navBar = [
    {id:1, path:"/", name: "Home"},
    {id:2, path:"/about", name: "About"},
    {id:3, path:"/contact", name: "Contact"},
    {id:4, path:"/users", name: "Users"},
    {id:5, path:"/users2", name: "Users2"},
    {id:6, path:"/posts", name: "Posts"},
  ]
  return (
    <div className='p-4 bg-indigo-200 font-medium space-x-3'>
      {
        navBar.map(item => (
          <NavLink key={item.id} to={item.path}>
            {item.name}
          </NavLink>
        ))
      }
    </div>
  )
}
