import React from 'react'
import { Link } from 'react-router-dom'
import BookDetail from './BookDetail'
const Book = ({ book }) => {
  const {bookId,image, bookName, author, tags, category, rating } = book
  return (
    <Link to={`/books/${bookId}`}>
      <div className='bg-base-100 shadow-xl p-6 rounded-2xl w-96 card'>
        <figure className='bg-sky-100 py-8'>
          <img src={image} className='h-[166px]' alt={bookName} />
        </figure>
        <div className='card-body'>
          <div className='flex justify-center gap-10'>
            {tags.map((tag,index) => (
              <button key={index}
              n className='bg-green-200 h-7 text-extrabold text-green-500 btn btn-xs'>
                {tag}
              </button>
            ))}
          </div>
          <h2 className='card-title'>{bookName}</h2>
          <p>By:{author}</p>
          <div className='border-t-2 border-dashed'></div>

          <div className='justify-between p-5 card-actions'>
            <div className='badge badge-outline'>{category}</div>
            <div className='rating'>
              <input
                type='radio'
                name='rating-2'
                className='bg-green-300 mask mask-star-2'
              />
              {rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Book
