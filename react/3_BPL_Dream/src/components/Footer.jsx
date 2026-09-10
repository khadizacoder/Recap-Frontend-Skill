import React from 'react'
import Logo from '../assets/logo-footer.png'

export default function Footer() {
  return (
    <div className='bg-[#040b2e] text-white/80'>
      <div className='w-11/12 max-w-screen-xl mx-auto -mt-32 p-5 bg-white/30 rounded-xl border-1'>
        <div className='bg-white text-black flex flex-col items-center px-6 py-10 rounded-xl shadow shadow-gray-500'>
          <h2 className='text-2xl md:text-3xl font-bold'>Subscribe to our Newsletter</h2>
          <p className='text-base my-2'>Get the latest updates and news right in your inbox!</p>
          <div className='flex items-center gap-2 mt-3'>
            <input type="text" className='border-1 rounded-lg border-gray-300 roundedlg py-1.5 px-3 w-60' />
            <button className='font-semibold bg-amber-700 px-4 py-2 rounded-lg'>Subscribe</button>
          </div>
        </div>
      </div>

      <div className='border-1 border-white/70 mt-8'></div>

      <div className='my-8 w-11/12 max-w-screen-xl mx-auto'>
        <div className='w-full flex justify-center'>
          <img src={Logo} alt="footer-logo" />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div>
            <h2 className='text-white font-semibold text-xl'>About Us</h2>
            <p className='mt-3'>We are a passionate team dedicated to providing the best services to our customers.</p>
          </div>

          <div>
            <h2 className='text-white font-semibold text-xl'>Quick Links</h2>
            <ul className='pl-5 space-y-1 mt-3'>
              <li className='list-disc'>Home</li>
              <li className='list-disc'>Services</li>
              <li className='list-disc'>About</li>
              <li className='list-disc'>Contact</li>
            </ul>
          </div>

          <div>
            <h2 className='text-white font-semibold text-xl'>Subscribe to our Newsletter</h2>
            <p className='mt-2 w-65'>Subscribe to our newsletter for the latest updates.</p>
            <div className='flex items-center mt-5'>
              <input type="text" className='bg-white rounded-lg rounded-r-none py-2 px-3 w-60' />
              <button className='font-semibold bg-amber-700 px-4 py-2 rounded-lg rounded-l-none'>Subscribe</button>
            </div>
          </div>
        </div>

      </div>

      <div className='flex flex-row justify-center py-4'>
        <p>&copy; 2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  )
}
