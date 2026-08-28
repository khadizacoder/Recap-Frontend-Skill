import React from 'react'
import Bg from '..//assets/bg-shadow.png';
import BannerMain from '..//assets/banner-main.png';

export default function Hero() {
    return (
        <div className='w-11/12 max-w-screen-xl mx-auto bg-black rounded-xl relative'>
            <img src={Bg} alt="" className='rounded-xl' />

            <div className='absolute inset-0 flex flex-col justify-center items-center text-white text-center'>
                <img src={BannerMain} alt="banner-main" className='w-40 my-5' />
                <div className='space-y-5'>
                    <h1 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-2xl'>Beyond Boundaries Beyond Limits</p>
                    <button className='text-[16px] font-bold bg-[#E7FE29] text-black py-2 px-3 rounded-lg ring-2 ring-[#E7FE29] ring-offset-5 ring-offset-black'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    )
}
