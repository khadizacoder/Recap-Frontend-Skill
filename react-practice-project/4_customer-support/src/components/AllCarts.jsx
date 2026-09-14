import React, { use } from 'react'
import Cart from './Cart';

export default function AllCarts({custommerData, handleProgress}) {
    const allData = use(custommerData);

  return (
    <div className='mt-2 grid grid-cols-1 lg:grid-cols-2 gap-6 md:mr-10'>
      {
        allData.map(cart => <Cart key={cart.id} cart={cart} handleProgress={handleProgress}/> )
      }
    </div>
  )
}
