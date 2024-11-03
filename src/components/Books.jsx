import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Book from './Book'
const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('./booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  return (
    <div >


      <h2 className='font-bold text-4xl text-center'> Books</h2>
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {books.map(book => (
          <Book book={book} key={book.BookId} />
        ))}
      </div>
    </div>
  )
}

export default Books

// 1.state to store the book
// 2.useeffect
// 3.fetch to load data
// 4.set the data books state
