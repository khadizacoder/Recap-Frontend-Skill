import React, { use } from 'react'
import { useOutletContext } from 'react-router'
import Cart from './Cart';

export default function Carts({}) {

  const { addCart, handleRemove } = useOutletContext();

  return (
    <div className='w-11/12 max-w-screen-lg mx-auto'>
      <h1 className='mt-8 text-2xl font-semibold'>Total Cart Product : {addCart.length} </h1>
      {
        addCart.map(bottle => <Cart key={bottle.id} bottle={bottle} handleRemove={handleRemove} />)
      }
    </div>
  )
}
