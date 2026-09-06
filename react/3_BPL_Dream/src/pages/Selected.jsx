import React from 'react'
import Delete from '../assets/delete.png'

export default function Selected({select, handleRemove, setBalanced, balanced }) {
    const {image, name} = select;
  return (
    <div className='mb-5 flex items-center justify-between border-1 border-gray-300 p-4 rounded-lg'>
        <div className='flex items-center gap-6'>
            <img src={image} alt="" className='w-14 h-14 object-cover'/>
            <div>
                <p className='text-lg font-semibold'>{name}</p>
                <p>Left-Hand-Bat</p>
            </div>
        </div>
        <img 
            onClick={() => 
                {
                    handleRemove(select.id)
                    setBalanced(balanced + select.price)
                }
            } 
        src={Delete} alt="deleteh" className='cursor-pointer' />
    </div>
  )
}
