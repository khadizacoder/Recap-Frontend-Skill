import React, { useState } from 'react'

export default function VisitedCountry({ item, isVisited }) {
    const [visite, setVisite] = useState(false);

    const handleVisited = () => {
        setVisite(!visite)
        isVisited(item)
    }
    return (
        <>
            <div className={`bg-blue-200 p-6 mx-auto rounded-lg hover:ring-1 ring-blue-700 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-200 cursor-pointer`}>

                <img src={item.flags.flags.png} alt={item.name.common} className='w-100 h-40 bg-cover' />
                <div className='flex mt-2'>
                    <span className='font-medium mr-2'>Name: </span>
                    {item.name.common}
                </div>

                <p>Region: {item.region.region}</p>

                <button
                    onClick={handleVisited}
                    className={`w-full py-2 rounded font-medium text-white mt-4 bg-amber-600`}>
                    Visited
                </button>

            </div>

        </>
    )
}
