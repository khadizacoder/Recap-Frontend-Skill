import React, { useState } from 'react'
import Header from './Header'
import Bottles from '../pages/Bottles'
import Footer from './Footer'
import { Outlet } from 'react-router'

const bottlesPromiss = fetch("/Bottles.json")
    .then(res => res.json());

export default function Root() {

    const [addCart, setAddCart] = useState([]);

    const handleCart = (bottle) => {

        const alreadyExsixt = addCart.some(item => item.id === bottle.id);

        if(!alreadyExsixt)
            setAddCart(prev => [...prev, bottle]);
    }

    const handleRemove = (id) => {
        setAddCart(prev => prev.filter(bottle => bottle.id !== id));
    }
    console.log(addCart)

    return (
        <div className='flex flex-col min-h-screen'>
            <Header addCart={addCart} />
            <main className='flex-1'>
                <Outlet context={{ bottlesPromiss, handleCart, addCart, handleRemove }} />
            </main>
            <Footer />
        </div>
    )
}
