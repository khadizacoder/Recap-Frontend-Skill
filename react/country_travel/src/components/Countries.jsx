import React, { use } from 'react'
import County from './County';

export default function Countries({ countriesPromise, isVisited }) {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div className=''>
            <h1 className='text-3xl font-semibold'>Total Countries: {countries.length}</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mx-auto'>
                {
                    countries.map((country, index) => 
                    <County 
                        key={index} 
                        country={country} 
                        isVisited={isVisited} 
                    />)
                }
            </div>

        </div>
    )
}
