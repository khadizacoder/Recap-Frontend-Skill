import React, { useState } from 'react'

export default function County({ country, isVisited }) {
  const [visite, setVisite] = useState(false);

  const handleVisited = () => {
    setVisite(!visite)
    isVisited(country)
  }

  return (
    <div className={`bg-blue-200 p-6 mx-auto rounded-lg hover:ring-1 ring-blue-700 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-200 cursor-pointer`}>

        <img src={country.flags.flags.png} alt={country.name.common} className='w-100 h-40 bg-cover' />
        <div className='flex mt-2'>
          <span className='font-medium mr-2'>Name: </span>
          {country.name.common}
        </div>

        <p>Region: {country.region.region}</p>

        <button 
          onClick={handleVisited} 
          className={`w-full py-2 rounded font-medium text-white mt-4 ${visite ? 'bg-amber-600' : 'bg-blue-500 '}`}>
          {visite ? "Visited" : "Visite Now"}
        </button>
    </div>
  )
}
