import React from 'react'
import BannerImg from '../../assets/book-1.png'

export default function Banner() {
    return (
        <div className="hero bg-[#F3F3F3] px-6 lg:px-25 py-6 rounded min-h-screen md:min-h-138.5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    alt="Tailwind CSS hero component"
                    src={BannerImg}
                    className="max-w-sm "
                />
                <div className='space-y-10'>
                    <h1 className="text-5xl/14 font-bold xl:w-lg ">Books to freshen up your bookshelf</h1>
                    <button className="bg-[#23BE0A] py-2 px-4 rounded font-semibold text-white">View The List</button>
                </div>
            </div>
        </div>
    )
}
