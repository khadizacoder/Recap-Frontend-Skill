import React from 'react'
import { Link, NavLink } from 'react-router'

export default function Navbar() {

    const navItem = [
        { id: 0, path: "/", name: "Home" },
        { id: 1, path: "/listbooks", name: "Listed Books" },
        { id: 2, path: "/readpages", name: "Pages to Read" },
    ]

    const links = navItem.map(item => (
                <NavLink 
                    to={item.path} 
                    key={item.id}
                    className={({isActive}) => `px-4 py-1.5 rounded ${isActive ? `text-[#23BE0A] border` : ""}`}
                >{item.name}</NavLink>
            ));

    return (
        <div>
            <div className="navbar bg-base-100 p-0 my-2">
                <div className="navbar-start">
                    <div className="dropdown static md:relative">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        {/* Mobile menu */}
                        <ul
                            tabIndex={-1}
                            className="menu text-lg transition-all duration-500 dropdown-content bg-base-100 z-1 mt-3 w-full left-0 right-0 p-4 space-y-3">

                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <a className="font-bold text-3xl ">Book<span className='text-[#0085F6]'>Store</span></a>
                </div>

                {/* Dextop menu */}
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3 text-lg">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end space-x-3 text-white">
                    <Link className="bg-[#23BE0A] py-2 px-4 rounded font-semibold">Sign In</Link>
                    <Link className="bg-[#59C6D2] py-2 px-4 rounded font-semibold">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
