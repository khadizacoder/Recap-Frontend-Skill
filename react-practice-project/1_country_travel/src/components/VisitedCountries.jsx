import React, { Suspense, useState } from 'react'
import VisitedCountry from './VisitedCountry'

export default function VisitedCountries({ visitedCountry, setVisitedCountry, isVisited }) {

    return (
        <div className='w-11/12 md:max-w-screen-lg mx-auto mt-10'>
            <h1 className='text-2xl font-medium'>Total Visited Countries: {visitedCountry.length}</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-6 gap-6'>
                {
                    visitedCountry.map(item => <VisitedCountry key={item.cca3} item={item} isVisited={isVisited} />)
                }
            </div>

        </div>
    )
}
