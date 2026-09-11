import React, { use } from 'react'
import { useOutletContext } from 'react-router';
import Bootl from './Bootl';

export default function Bottles({ }) {

  const { bottlesPromiss, handleCart } = useOutletContext();
  const bottlesData = use(bottlesPromiss);

  return (
    <div className='w-11/12 max-w-screen-lg mx-auto my-10'>
      <h2 className='text-2xl font-semibold'>Total Bottles : {bottlesData.length} </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto mt-6 gap-8'>
        {
          bottlesData.map(bottle => <Bootl key={bottle.id} bottle={bottle} handleCart={handleCart} /> )
        }
      </div>
    </div>
  )
}
