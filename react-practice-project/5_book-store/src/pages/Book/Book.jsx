import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import { Link } from 'react-router';

export default function Book({ book }) {
    const { bookId, bookName, author, image, rating, category, publisher, tags } = book;
    return (
        <Link to={`/bookdetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-6">
                <figure className='bg-[#F3F3F3] py-10 rounded'>
                    <img
                        className=' h-40'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body px-0 space-y-1 pb-0">
                    <div className='text-[#23BE0A] space-x-3 mt-2'>
                        {
                            tags.map((tag, index) => (
                                <button key={index} className='text-[16px] font-medium bg-[#F3F3F3] py-1.5 px-4 rounded-full'>{tag}</button>
                            ))
                        }
                    </div>

                    <h2 className="text-2xl font-semibold">{bookName}</h2>
                    <p className='text-[16px]'>Book by: {publisher}</p>
                    <p className='text-[16px]'>Author: {author}</p>
                    <div className='border border-dashed border-gray-200'></div>
                    <div className="w-full flex justify-between items-center text-[16px]">
                        <p>{category}</p>
                        <span className="flex items-center gap-1 text-yellow-500">
                            {
                                [1, 2, 3, 4, 5].map((star) => {
                                    if (rating >= star) {
                                        // পূর্ণ স্টার (Full Star)
                                        return <FaStar key={star} />;
                                    } else if (rating >= star - 0.5) {
                                        // হাফ স্টার (Half Star)
                                        return <FaStarHalfAlt key={star} />;
                                    } else {
                                        // খালি স্টার (Empty Star)
                                        return <FaRegStar key={star} className="text-gray-300" />;
                                    }
                                })
                            }
                        </span>
                    </div>
                </div>
            </div>
        </Link>

    )
}
