import React, { use } from 'react'

export default function AvailablePlyers({PromissData}) {
  const playersData = use(PromissData);
  console.log(playersData)
  return (
    <div className='w-11/12 max-w-screen-xl mx-auto mt-12'>
        <h1 className='text-2xl font-bold'>Available Players</h1>
        <div>
          
        </div>
    </div>
  )
}
