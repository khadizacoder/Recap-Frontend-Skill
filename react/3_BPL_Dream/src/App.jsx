import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import AvailablePlyers from './pages/AvailablePlyers'
import SelectedPlayers from './pages/SelectedPlayers'
import Hero from './components/Hero'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json();
}

export default function App() {
  const PromissData = fetchPlayers();
  return (
    <div>
      <Navbar />
      <Hero />



      <Suspense fallback={<p className='w-11/12 max-w-screen-xl mx-auto mt-12'>Loading......</p>}>
        <AvailablePlyers PromissData={PromissData} />
      </Suspense>
      {/* <SelectedPlayers /> */}

    </div>
  )
}
