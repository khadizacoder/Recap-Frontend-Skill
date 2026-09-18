import React from 'react'

export default function ProductTable({ product }) {
  return (
    <div className='w-9/10 mx-auto mt-10'>
      <h2 className='text-xl font-semibold'>Total Product : {product.length}</h2>

      <table className='mt-4'>
        <thead>
          <tr className='flex gap-5'>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            product.map((item, index) => (
              <tr key={index} className='flex gap-8'>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
