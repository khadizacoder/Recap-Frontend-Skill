import React, { use } from 'react'
import PricingCard from './PricingCard'

export default function Pricing({pricingPromiss}) {
    const priceData = use(pricingPromiss);

    return (
        <div className="card w-11/12 gap-10 bg-base-100 shadow-sm mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                priceData.map(pData => <PricingCard key={pData.id} pData={pData} />)
            }
        </div>
    )
}
