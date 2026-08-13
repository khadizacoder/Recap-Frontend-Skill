import React from 'react'
import { NavLink } from 'react-router'

export default function Header({ addCart }) {

    const navBar = [
        { id: 1, path: "/", name: "All Bottles" },
        { id: 2, path: "/cart", name: "Cart", len: addCart.length }
    ]

    return (
        <div className='bg-blue-200'>
            <div className='w-11/12 max-w-screen-lg mx-auto gap-4 flex'>
                {
                    navBar.map(nav => (
                        <NavLink
                            key={nav.id}
                            to={nav.path}
                            className={({ isActive }) => `py-3 px-4 ${isActive ? "bg-white" : ""}`}
                        >
                            {nav.name} {" "}
                            {
                                nav.len !== undefined && (
                                    <span>{nav.len}</span>
                                )
                            }

                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}
