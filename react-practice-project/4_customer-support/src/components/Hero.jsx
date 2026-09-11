import React from 'react'
import ShefOne from '../assets/shef-1.png'
import ShefTwo from '../assets/shef-2.png'

export default function Hero() {
    return (
        <div className='py-10 flex justify-between items-center gap-5 text-white'>
            <div className='w-1/2 h-35 md:h-45 lg:h-60 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] flex flex-col items-center justify-center rounded relative overflow-hidden'>
                <p className='text-lg md:text-2xl'>In-Progress</p>
                <h1 className='font-bold text-2xl md:text-4xl'>0</h1>
                <img src={ShefOne} alt="" className='absolute top-0 -left-10 hidden md:flex' />
                <img src={ShefTwo} alt="" className='absolute top-0 -right-10 hidden md:flex' />
            </div>
            <div className='w-1/2 h-35 md:h-45 lg:h-60 bg-gradient-to-r from-[#54CF68] to-[#00827A] flex flex-col items-center justify-center rounded relative overflow-hidden'>
                <p className='text-lg md:text-2xl'>Resolved</p>
                <h1 className='font-bold text-2xl md:text-4xl'>0</h1>
                <img src={ShefOne} alt="" className='absolute top-0 -left-10 hidden md:flex' />
                <img src={ShefTwo} alt="" className='absolute top-0 -right-10 hidden md:flex' />
            </div>
        </div>
    )
}
