import React from 'react'
import { MdInsertPageBreak, MdOutlineSupervisorAccount } from 'react-icons/md';
import { Link } from 'react-router';

export default function ListBookDetails({ book }) {
    const {bookId, bookName, image, author, tags, review, category, totalPages, publisher, yearOfPublishing, rating } = book;


    return (
        <>
            <div className='flex gap-4 md:gap-6 lg:gap-10 py-8 items-center'>

                <div className='bg-[#F3F3F3] p-4 rounded w-30 h-30 md:w-65 md:h-65 flex-shrink-0'>
                    <img src={image} alt="BookImage" className='w-full h-full object-cover rounded' />
                </div>

                <div className='space-y-2 md:space-y-4 text-[16px] text-gray-500 flex-1 w-full'>
                    <h2 className='font-bold text-gray-800 text-3xl'>{bookName}</h2>
                    <p className='font-medium'>By: {author}</p>

                    <div className='flex items-center space-x-4'>
                        <p className='font-bold text-gray-800'>Tag</p>
                        {
                            tags.map((tag, index) => (
                                <span className='bg-[#23BE0A]/5 px-4 py-1.5 rounded-full text-[#23BE0A] font-medium' key={index}>#{tag}</span>
                            ))
                        }
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-4'>
                            <MdOutlineSupervisorAccount size={25} />
                            <span>Publisher: {publisher}</span>
                        </div>

                        <div className='flex items-center gap-4'>
                            <MdInsertPageBreak size={25} />
                            <span>Page : {totalPages}</span>
                        </div>
                    </div>

                    <div className='border mt-4 border-gray-200'></div>

                    <div className='space-x-3'>
                        <button className='bg-[#328EFF]/15 px-4 py-1.5 rounded-full text-[#328EFF] font-medium'>Category: {category}</button>
                        <button className='bg-[#FFAC33]/15 px-4 py-1.5 rounded-full text-[#FFAC33] font-medium'>Rating: {rating}</button>
                        <Link to={`/bookdetails/${bookId}`} className='bg-[#23BE0A] px-4 py-1.5 rounded-full text-[#FFFFFF] font-medium'>View Details</Link>
                    </div>
                </div>

            </div>
        </>
    )
}
