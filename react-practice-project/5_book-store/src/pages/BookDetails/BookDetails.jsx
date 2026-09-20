import React from 'react'
import { useLoaderData, useParams } from 'react-router'

export default function BookDetails() {
  const { id } = useParams();
  const bookId = parseInt(id);

  const bookData = useLoaderData();
  const singleBook = bookData.find(book => book.bookId === bookId);
  console.log(singleBook)
  const { bookName, image, author, tags, review, category, totalPages, publisher, yearOfPublishing, rating } = singleBook;

  return (
    <div className='grid gap-4 md:gap-6 lg:gap-10 lg:grid-cols-[40%_60%] py-15'>
      <div className='bg-[#F3F3F3] lg:p-15 p-8 rounded'>
        <img src={image} alt="BookImage" className='h-80 md:h-110 lg:h-full mx-auto' />
      </div>

      <div>
        <h2 className='font-bold lg:text-5xl md:text-4xl text-3xl'>{bookName}</h2>
        <p className='text-xl font-medium mt-4'>By: {author}</p>

        <div className='border mt-4 border-gray-200'></div>
        <p className='mt-4 font-medium text-xl'>{category}</p>
        <div className='border mt-4 border-gray-200'></div>

        <div className='mt-4 text-[16px]'>
          <span className='font-bold'>Review : </span>
          <span>{review}</span>
        </div>

        <div className='flex items-center mt-4 space-x-4 text-[16px]'>
          <p className='font-bold'>Tag</p>
          {
            tags.map((tag, index) => (
              <span className='bg-[#F3F3F3] px-4 py-1.5 rounded-full text-[#23BE0A] font-medium' key={index}>#{tag}</span>
            ))
          }
        </div>

        <div className='border mt-4 border-gray-200'></div>

        <table className="w-full mt-4 text-[16px]">
          <tbody>
            <tr>
              <td className='py-1.5'>Number of Pages:</td>
              <td className='py-1.5 font-semibold'>{totalPages}</td>
            </tr>
            <tr className="">
              <td className='py-1.5'>Publisher:</td>
              <td className='py-1.5 font-semibold'>{publisher}</td>
            </tr>
            <tr className="">
              <td className='py-1.5'>Year of Publishing:</td>
              <td className='py-1.5 font-semibold'>{yearOfPublishing}</td>
            </tr>
            <tr className="">
              <td className='py-1.5'>Rating:</td>
              <td className='py-1.5 font-semibold'>{rating}</td>
            </tr>
          </tbody>
        </table>

        <div className='flex items-center gap-5 mt-4 text-lg font-semibold'>
          <button className='border border-gray-400 py-2 px-4 rounded'>Read</button>
          <button className='text-white bg-[#50B1C9] py-2 px-4 rounded'>Wishlist</button>
        </div>

      </div>

    </div>
  )
}
