import { Suspense, useState } from 'react'
import Countries from './components/Countries'
import Hero from './components/Hero'

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())

function App() {
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (country) => {
    const visite = [...visitedCountry, country];
    setVisitedCountry(visite);
  }

  console.log(visitedCountry)

  return (
    <>
      <Hero visitedCountry={visitedCountry} />

      <div className='w-11/12 md:max-w-screen-lg mx-auto mt-10'>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Countries countriesPromise={countriesPromise} isVisited={handleVisitedCountry}/>
        </Suspense>
      </div>
      
    </>
  )
}

export default App
