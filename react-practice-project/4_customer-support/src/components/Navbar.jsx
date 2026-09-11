import React, { useState } from 'react'
import Plus from '../assets/plus.png'
import Menu from '../assets/menu.png'
import MenuOf from '../assets/menu-of.png'

const NavBar = [
    { id: 1, name: "Home" },
    { id: 2, name: "FAQ" },
    { id: 3, name: "Changelog" },
    { id: 4, name: "Blog" },
    { id: 5, name: "Download" },
    { id: 6, name: "Contact" },
]

const navItems = NavBar.map(item => (
    <a key={item.id} className='cursor-pointer hover:bg-white p-1.5 rounded'> {item.name} </a>
))

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='bg-white py-6 relative border-b-1 border-gray-200 z-50'>
            <div className='flex justify-between items-center w-11/12 max-w-screen-xl mx-auto'>
                {/* Left side */}
                <div>
                    <h1 className='font-bold text-2xl'>CS — Ticket System</h1>
                </div>

                {/* Right side */}
                <div className='flex items-center gap-6'>
                    <div className='hidden lg:flex items-center gap-6'>{navItems}</div>

                    <div className='hidden bg-[#422AD5] text-white lg:flex justify-center items-center w-34 py-2 rounded cursor-pointer'>
                        <img src={Plus} alt="plus" />
                        <button className='cursor-pointer'>New Ticket</button>
                    </div>

                    <div className='cursor-pointer'>
                        <img src={Menu} alt="menu" className='w-8 lg:hidden' onClick={() => setOpenMenu(!openMenu)}/>

                       <div className={`absolute 
                        ${openMenu ? 'top-20' : '-top-80'}
                        right-0 left-1/2 -translate-x-1/2 bg-blue-300 w-screen lg:hidden transition-all duration-400`}>
                            <div className=' flex flex-col w-11/12 max-w-screen-xl mx-auto py-4'>{navItems}</div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
