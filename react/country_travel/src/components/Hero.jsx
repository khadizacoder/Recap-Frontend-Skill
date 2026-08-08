import React from 'react'
import logo from '/favicon.png'

export default function Hero({visitedCountry}) {
    return (
        <div className='bg-blue-400'>
            <div className='w-11/12 md:max-w-screen-lg mx-auto flex justify-between items-center '>
                <div>
                    <img src={logo} alt="logo" className='w-16 cursor-pointer' />
                </div>

                <div className='flex gap-2'>
                    <button className='px-4 py-2 rounded bg-white font-medium'>Visite Now</button>
                    <button className='px-4 py-2 rounded font-medium'>Visited {visitedCountry.length}</button>
                </div>
            </div>
        </div>
    )
}
