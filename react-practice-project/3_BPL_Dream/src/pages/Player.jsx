import React, { useState } from 'react'
import userLogo from '../assets/user.png'
import flag from '../assets/flag.png'

export default function Player({ plyer, handleCart, setBalanced, balanced, cart }) {
  const { image, name, country, role, rating, price } = plyer;
  // const [selected, setSelected] = useState(false);
  const isSelected = cart.some(item => item.id === plyer.id);
  const handleBtn = (plyer) => {
    if(balanced >= plyer.price && cart.length < 6)
    {
      // setSelected(true);
      handleCart(plyer);
      // setBalanced(balanced - plyer.price);
    }
  }

  return (
    <div className='bg-gray-50 rounded-lg p-6 border-gray-200 border-1 hover:ring-1 ring-blue-600 transition duration-200'>
      <div>
        <img src={image} alt="" className='w-full h-60 object-cover'/>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <img src={userLogo} alt="user" className='w-5 h-5' />
        <p>{name}</p>
      </div>
      <div className='flex items-center justify-between mt-2 border-b-1 border-b-gray-200 pb-3'>
        <div className='flex items-center gap-2'>
          <img src={flag} alt="flag" className='w-4 h-4' />
          <p>{country}</p>
        </div>
        <button className='bg-gray-200 px-4 py-2 rounded cursor-pointer'>{role}</button>
      </div>

      <div className='flex items-center justify-between mt-2'>
        <span className='font-semibold'>Rating</span>
        <span>{rating}</span>
      </div>
      <div className='flex items-center justify-between mt-2'>
        <span className='font-semibold'>Left-Hand-Bat</span>
        <span>Left-Hand-Bat</span>
      </div>
      <div className='flex items-center justify-between mt-2'>
        <span className='font-semibold'>Price: {price}</span>
        <button onClick={() => handleBtn(plyer)} disabled={isSelected} className={`border-1 border-gray-300 py-1.5 px-4 rounded-lg ${isSelected ? "cursor-not-allowed bg-gray-200" : "cursor-pointer"}`}> {isSelected ? "Selected" : "Choose Player"} </button>
      </div>
    </div>
  )
}
