import React, { useState } from 'react'
import ProductForm from './ProductForm'
import ProductTable from './ProductTable'

export default function ProductManagement() {
    const [product, setProduct] = useState([]);

    const handleProduct = (newProduct) => {
        setProduct(prev => [...prev, newProduct])
    }
    console.log(product)

    return (
        <div>
            <ProductForm handleProduct={handleProduct}/>
            <ProductTable product={product} />
        </div>
    )
}
