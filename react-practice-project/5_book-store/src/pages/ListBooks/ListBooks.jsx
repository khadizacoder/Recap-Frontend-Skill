import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getWishlistBooks } from '../../Utility/addToDB';
import ListBookDetails from '../ListBookDetails/ListBookDetails';
import WishlistBooks from '../WishlistBooks/WishlistBooks';
import { IoIosArrowDown } from 'react-icons/io';

export default function ListBooks() {
  const data = useLoaderData();
  const [readList, setReadList] = useState([])
  const [WishlisList, setWishlisList] = useState([]);

  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedBookData = getStoredBook();
    // console.log(storedBookData)

    const convertedStoredBooks = storedBookData.map(id => parseInt(id));
    const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
    setReadList(myReadList)
  }, [data])

  useEffect(() => {
    const storedBookData = getWishlistBooks();

    const convertedStoredBooks = storedBookData.map(id => parseInt(id));
    const myWishlisList = data.filter(book => convertedStoredBooks.includes(book.bookId));
    setWishlisList(myWishlisList)
  }, [data]);

  const handleSort = (type) => {
    setSort(type);

    if (type === "Pages") {
      const sortedByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
      setReadList(sortedByPages);
      // console.log(sortedByPages)
    }
    else if (type === "Ratings") {
      const sortedByRating = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedByRating);
    }

    if (type === "Pages") {
      const sortedPages = [...WishlisList].sort((a, b) => a.totalPages - b.totalPages);
      setWishlisList(sortedPages);
      // console.log(sortedPages)
    }
    else if (type === "Ratings") {
      const sortedRating = [...WishlisList].sort((a, b) => b.rating - a.rating);
      setWishlisList(sortedRating);
    }
  }

  return (
    <>
      <title>Book Store - Book List</title>

      <div className='flex justify-center pt-4 pb-25'>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white flex gap-2 text-lg">
            <span>Sort By{sort && ` : ${sort}`}</span>
            <IoIosArrowDown size={25} />
          </div>

          <ul tabIndex={0} className="dropdown-content menu z-1 w-52 shadow-sm bg-black/5">
            <li><a onClick={() => handleSort("Ratings")}>Rating</a></li>
            <li><a onClick={() => handleSort("Pages")}>Number of pages</a></li>
          </ul>
        </div>
      </div>



      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {
            readList.map(book => <ListBookDetails key={book.bookId} book={book} />)
          }
        </TabPanel>
        <TabPanel>
          {
            WishlisList.map(wishlist => <WishlistBooks key={wishlist.bookId} wishlist={wishlist} />)
          }
        </TabPanel>
      </Tabs>
    </>
  )
}
