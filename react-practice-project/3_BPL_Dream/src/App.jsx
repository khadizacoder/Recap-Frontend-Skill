import React, { Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import AvailablePlyers from './pages/AvailablePlyers'
import SelectedPlayers from './pages/SelectedPlayers'
import Hero from './components/Hero'
import Footer from './components/Footer'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json();
}

const PromissData = fetchPlayers();
export default function App() {
  const [toggle, setToggle] = useState(true);
  const [cart, setCart] = useState([]);
  const [balanced, setBalanced] = useState(60000000);

  const handleCart = (plyer) => {
    const isSelected = cart.some(item => item.id == plyer.id);

    if (!isSelected && cart.length < 6 && balanced > plyer.price) {
      setCart(prev => [...prev, plyer]);
      setBalanced(prev => prev - plyer.price);
    }

  }

  const handleRemove = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='mb-15 flex-1 mb-40'>
        <Navbar balanced={balanced} />
        <Hero />

        <div className='w-11/12 max-w-screen-xl mx-auto mt-8 md:mt-12 flex items-center justify-between'>
          <h1 className='text-xl md:text-2xl font-bold'>{toggle ? "Available Players" : `Selected Player (${cart.length}/6)`}</h1>
          <div className='flex items-center font-semibold rounded-lg'>
            <button onClick={() => setToggle(true)} className={`py-2 px-4 border-1 border-gray-300 border-r-0 rounded-l-lg cursor-pointer ${toggle && "bg-[#E7FE29]"}`}>Available</button>
            <button onClick={() => setToggle(false)} className={`py-2 px-4 border-1 border-gray-300 border-l-0 rounded-r-lg cursor-pointer ${toggle || "bg-[#E7FE29]"}`}>Seleceted <span>({cart.length})</span></button>
          </div>
        </div>

        {
          toggle ? <Suspense fallback={<p className='w-11/12 max-w-screen-xl mx-auto mt-8'>Loading......</p>}>
            <AvailablePlyers PromissData={PromissData} handleCart={handleCart} setBalanced={setBalanced} balanced={balanced} cart={cart} />
          </Suspense> : <SelectedPlayers cart={cart} handleRemove={handleRemove} setBalanced={setBalanced} balanced={balanced} />
        }

      </div>
      <Footer />
    </div>
  )
}
