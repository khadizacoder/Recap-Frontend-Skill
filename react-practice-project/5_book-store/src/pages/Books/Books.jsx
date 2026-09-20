import React, { use } from 'react'
import Book from '../Book/Book';

export default function Books({ promissData }) {
  // const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //   fetch("/booksData.json")
  //     .then(res => res.json()
  //     .then(data => setAllBooks(data)))
  // }, []);

  const allBooks = use(promissData);

  return (
    <div className='my-18'>
      <h2 className='text-[40px] font-bold text-center'>Books</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8'>
        {
          allBooks.map(book => <Book key={book.bookId} book={book} />)
        }
      </div>
    </div>
  )
}
