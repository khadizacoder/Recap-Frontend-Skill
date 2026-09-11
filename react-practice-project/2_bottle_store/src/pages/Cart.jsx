import React from 'react'
import Remove from '../assets/remove.png'

export default function Cart({ bottle, handleRemove }) {
    const { name, img, stock } = bottle;

    return (
        <div className='mt-6 border-[1px] border-gray-300 rounded flex justify-between items-center'>
            <div className='flex gap-4'>
                <img src={img} alt="" className='w-20 rounded-bl rounded-tl' />
                <div>
                    <h1 className='mt-4'>
                        <span className='font-medium'>Name: </span>
                        {name}</h1>
                    <p>
                        <span className='font-medium'>Stock: </span>
                        {stock} Remining</p>
                    <p></p>
                </div>
            </div>

            <button onClick={() => handleRemove(bottle.id)}>
                <img src={Remove} alt="" className='w-10 pr-4 cursor-pointer' />
            </button>
        </div>
    )
}
