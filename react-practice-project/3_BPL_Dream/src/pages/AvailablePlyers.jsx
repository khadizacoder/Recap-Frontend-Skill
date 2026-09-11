import React, { use } from 'react'
import Player from './Player';

export default function AvailablePlyers({ PromissData, handleCart, setBalanced, balanced, cart }) {
  const playersData = use(PromissData);

  return (
    <div className='w-11/12 max-w-screen-xl mx-auto mt-8 md:mt-12'>
      {/* <h1 className='text-xl md:text-2xl font-bold'>Available Players</h1>
        <div>
          
        </div> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          playersData.map(plyer => <Player key={plyer.id} plyer={plyer} handleCart={handleCart} setBalanced={setBalanced} balanced={balanced} cart={cart} />)
        }
      </div>
    </div>
  )
}
