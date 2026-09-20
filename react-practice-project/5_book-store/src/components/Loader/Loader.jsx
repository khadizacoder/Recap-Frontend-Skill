import React from 'react'

export default function Loader() {
    return (
        <div className='flex items-center justify-center min-h-[calc(100vh-200px)]'>
            <span className="loading loading-spinner w-12 h-12 text-primary"></span>
        </div>
    )
}
