import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AllCarts from './components/AllCarts';
import Footer from './components/Footer';

const custommerData = fetch("/custommer.json").then(res => res.json());

function App() {
  return (
    <>
      <Navbar />

      <main className='bg-[#627382]/8'>
        <div className='w-11/12 max-w-screen-xl mx-auto'>
          <Hero />
          <div className='grid grid-cols-1 md:grid-cols-[70%_30%] pb-10'>

            <div className='order-2 md:order-1'>
              <h2 className='font-semibold text-2xl'>Customer Tickets</h2>

              <AllCarts custommerData={custommerData} />
            </div>

            <aside className='order-1 md:order-2'>
              <div>
                <h2 className='font-semibold text-2xl'>Task Status</h2>
                <div className='mt-2'>
                  <p>Select a ticket to add to Task Status</p>
                </div>
              </div>

              <div className='my-10'>
                <h2 className='font-semibold text-2xl'>Resolved Task</h2>
                <div>
                  <p>No resolved tasks yet.</p>
                </div>
              </div>
            </aside>
            
          </div>
        </div>
      </main>

      <Footer />

    </>
  )
}

export default App
