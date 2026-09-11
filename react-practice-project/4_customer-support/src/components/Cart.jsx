import React from 'react'
import OpenCercle from '../assets/cercle.png'
import Ellipse from '../assets/Ellipse-2.png'
import Calendar from '../assets/calendar-line.png'

export default function Cart({ cart }) {
  const { title, description, customer, priority, status, createdAt } = cart;
  console.log(cart)
  return (
    <div className='bg-white p-6 rounded space-y-3'>
      <div className='flex items-center justify-between'>
        <h2 className='font-medium text-xl'>{title}</h2>

        <div className={`flex justify-center items-center gap-2 px-4 py-2 rounded-full ${status === 'Open' ? 'bg-[#B9F8CF] text-[#0B5E06]' : status === 'Resolved' ? "bg-gray-200 text-gray-800" : 'text-[#9C7700] bg-[#F8F3B9]'}`}>
          {status === 'Open' ? (<img src={OpenCercle} alt="open" />) : (<img src={Ellipse} alt="Ellipse" />)}
          <button>{status}</button>
        </div>
      </div>

      <p className=''>{description}</p>

      <div className='flex items-center justify-between'>
        <p className={`font-medium ${priority === 'High' ? "text-[#F83044]" : priority === "Medium" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`} >{priority}</p>

        <div className='flex items-center justify-center gap-3'>
          <h2 className='text-sm'>{customer}</h2>
          <div className='flex items-center justify-center gap-2'>
            <img src={Calendar} alt="" />
            <p>{createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
