import React from 'react'

export default function PricingCard({ pData }) {
    const { planName, badge, price, features, buttonText } = pData;
    return (
        <div className="card-body bg-blue-100">

            {
                badge && (<span className="badge badge-xs badge-warning">{badge}</span>)
            }

            <div className="flex justify-between">
                <h2 className="text-3xl font-bold">{planName}</h2>
                <span className="text-xl">{price}</span>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-xs">
                {
                    features.map((item, index) => (
                        <li key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{item.text}</span>
                        </li>
                    ))
                }
            </ul>

            <div className="mt-6">
                <button className="btn btn-primary btn-block">{buttonText}</button>
            </div>
        </div>
    )
}
