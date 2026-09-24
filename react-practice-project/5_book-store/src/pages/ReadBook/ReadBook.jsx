import React, { useState } from 'react'
import { useLoaderData } from 'react-router';
import { getWishlistBooks } from '../../Utility/addToDB';

export default function ReadBook() {
  const data = useLoaderData();
  const [WishlisList, setWishlisList] = useState([])

  useEffect(() => {
    const storedBookData = getWishlistBooks();
    // console.log(storedBookData)

    const convertedStoredBooks = storedBookData.map(id => parseInt(id));
    const myWishlisList = data.filter(book => convertedStoredBooks.includes(book.bookId));
    setReadList(myReadList)
  }, [])
  return (
    <div>ReadBook</div>
  )
}