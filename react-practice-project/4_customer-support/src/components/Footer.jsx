import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black text-white'>
        <div className='w-11/12 max-w-screen-xl mx-auto space-y-5 xl:space-y-0 grid grid-cols-1 gap-2 md:grid-cols-[50%_20%_30%] xl:grid-cols-[30%_17.5%_17.5%_17.5%_17%] justify-between items-center py-12'>
            
            <div className='mr-14'>
                <h1 className='font-bold text-2xl mb-2'>CS — Ticket System</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div>
                <h1 className='font-semibold text-xl mb-2'>Company</h1>
                <p>About Us</p>
                <p>Our Mission</p>
                <p>Contact Saled</p>
            </div>

            <div>
                <h1 className='font-semibold text-xl mb-2'>Services</h1>
                <p>Products & Services</p>
                <p>Customer Stories</p>
                <p>Download Apps</p>
            </div>

            <div>
                <h1 className='font-semibold text-xl mb-2'>Information</h1>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Join Us</p>
            </div>

            <div className=''>
                <h1 className='font-semibold text-xl mb-2'>Social Links</h1>
                <div>
                    <img src="" alt="" />
                    <p>@CS        — Ticket System</p>
                </div>
            </div>

        </div>
        <div className='h-[1px] bg-white/20'></div>
        <p className='flex items-center justify-center py-6'>&copy; 2025 CS — Ticket System. All rights reserved.</p>
    </div>
  )
}
