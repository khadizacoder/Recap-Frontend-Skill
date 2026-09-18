import React, { useState } from 'react'

export default function ProductForm({handleProduct}) {
    const [error, setError] = useState("")
    
    const handleSubmited = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct)
        
        if(name.length == 0)
            setError("Plese provide a name");
        else if(price <= 0)
            setError("Set a price");
        else if(quantity < 1)
            setError("Please add a quantity");
        else 
            {
                setError("")
                handleProduct(newProduct);
            }
    }
    return (
        <div>
            <h2 className='font-bold text-2xl mb-10 text-center'>Add a product</h2>

            <form onSubmit={handleSubmited} className='flex flex-col w-90 mx-auto space-y-3'>
                <input type="text" name='name' placeholder='Product name'
                    className='border rounded p-2' />

                <input type="text" name='price' placeholder='Product Price'
                    className='border rounded p-2' />

                <input type="text" name='quantity' placeholder='Product Quantity'
                    className='border rounded p-2' />

                <input type="submit" value="Submit" className='bg-gray-200 p-2'/>
                <small className='text-red-600'>{error}</small>
            </form>
        </div>
    )
}
