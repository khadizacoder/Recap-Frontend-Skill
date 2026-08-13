import React, { useState } from 'react'

export default function Bootl({ bottle, handleCart }) {

  const { name, img, stock, ratings } = bottle;
 
  const handleArray = (bottle) => {
    handleCart(bottle);
  }

  return (
    <div className='bg-blue-200 rounded-lg p-6'>
      <img src={img} alt="name" className='mx-auto rounded-lg' />
      <h1 className='mt-4'>
        <span className='font-medium'>Name: </span>
        {name}</h1>
      <p>
        <span className='font-medium'>Stock: </span>
        {stock} Remining</p>
      <p>
        <span className='font-medium'>Ratings: </span>
        {
          [1, 2, 3, 4, 5].map(star => (
            <span
              key={star}
              className={`${star <= ratings ? "text-yellow-500" : "text-gray-500"}`}
            >★</span>
          ))
        }
      </p>
      <button 
        onClick={() => handleArray(bottle)}
        className='bg-blue-800 text-white font-medium py-3 w-full mt-3 rounded-lg cursor-pointer hover:bg-blue-600 transition-all duration-200'
      >Add To Cart</button>
    </div>
  )
}
