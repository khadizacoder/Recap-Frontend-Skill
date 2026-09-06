import React from 'react'
import Selected from './Selected'

export default function SelectedPlayers({cart, handleRemove, setBalanced, balanced }) {
  return (
    <div className='w-11/12 max-w-screen-xl mx-auto'>
      <div className='mt-8'>
        {
          cart.map(select => <Selected select={select} handleRemove={handleRemove} setBalanced={setBalanced} balanced={balanced} />)
        }
      </div>
    </div>
  )
}
