import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import ListBookDetails from '../ListBookDetails/ListBookDetails';

export default function ListBooks() {
  const data = useLoaderData();
  const [readList, setReadList] = useState([])

  useEffect(() => {
    const storedBookData = getStoredBook();
    // console.log(storedBookData)

    const convertedStoredBooks = storedBookData.map(id => parseInt(id));
    const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
    setReadList(myReadList)
  },[])

  return (
    <>
      <title>Book Store - Book List</title>


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
          <h2>Any content</h2>
        </TabPanel>
      </Tabs>
    </>
  )
}
