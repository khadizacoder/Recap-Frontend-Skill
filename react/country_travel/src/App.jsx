import { Suspense, useState } from 'react'
import Hero from './components/Hero'

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())

function App() {
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (country) => {
    const alreadyVisited = visitedCountry.some(
      item => item.cca3 === country.cca3
    )

    if (alreadyVisited) {
      setVisitedCountry(visitedCountry.filter(item => item.cca3 !== country.cca3));
    }
    else {
      setVisitedCountry([...visitedCountry, country]);
    }
  }

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1'>
          <Hero visitedCountry={visitedCountry} countriesPromise={countriesPromise} isVisited={handleVisitedCountry} setVisitedCountry={setVisitedCountry} />
        </main>
        
        <div className='bg-blue-400 text-white p-6 font-semibold flex justify-center'>
          <p>© 2026 Visited Country. All rights reserved. | Developed by {" "}
            <a className='font-bold cursor-pointer' href="https://github.com/khadizacoder" target="_blank">khadizacoder</a>
          </p>
        </div>


      </div>
    </>
  )
}

export default App
