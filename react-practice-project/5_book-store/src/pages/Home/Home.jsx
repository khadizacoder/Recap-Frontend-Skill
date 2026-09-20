import React, { use } from 'react'
import Banner from '../../components/Banner/Banner'
import Books from '../Books/Books'

export default function Home({promissData}) {
  const allBooks = use(promissData);
  const books = allBooks;

  return (
    <div>
      <title>Book Store - Home</title>
      <Banner />
      <Books promissData={promissData}/>
    </div>
  )
}
