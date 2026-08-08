import React, { Suspense, useState } from 'react'
import logo from '/favicon.png'
import Countries from './Countries'
import VisitedCountries from './VisitedCountries'

export default function Hero({ visitedCountry, countriesPromise, isVisited, setVisitedCountry }) {

    const [openVisite, setOpenVisite] = useState(true)

    return (
        <>

            <div className='bg-blue-400'>
                <div className='w-11/12 md:max-w-screen-lg mx-auto flex justify-between items-center '>
                    <div>
                        <img src={logo} alt="logo" className='w-16 cursor-pointer' />
                    </div>

                    <div className='flex gap-2'>
                        <button onClick={() => setOpenVisite(true)}
                            className={`px-4 py-2 rounded font-medium cursor-pointer ${openVisite ? "bg-white" : ""}`}>Visite Now</button>
                        <button onClick={() => setOpenVisite(false)}
                            className={`px-4 py-2 rounded font-medium cursor-pointer ${!openVisite ? "bg-white" : ""}`}>Visited - {visitedCountry.length}</button>
                    </div>
                </div>
            </div>

            {
                openVisite ? (
                    <div className='w-11/12 md:max-w-screen-lg mx-auto mt-10'>
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Countries countriesPromise={countriesPromise} isVisited={isVisited} />
                        </Suspense>
                    </div>
                ) : (<VisitedCountries visitedCountry={visitedCountry} setVisitedCountry={setVisitedCountry} isVisited={isVisited} />)
            }


        </>
    )
}
