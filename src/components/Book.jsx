import React from 'react'

const Book = ({ book }) => {
    const {image, bookName, author,tags}=book;
    return (
        <div className="bg-base-100 shadow-xl p-6 rounded-2xl w-96 card">
        <figure className='bg-sky-100 py-8'>
          <img
            src={image}
            className='h-[166px]'
            alt={bookName} />
        </figure>
        <div className="card-body">
       <div className='flex justify-center gap-10'>
       {tags.map(tag => <button className="bg-green-200 h-7 text-extrabold text-green-500 btn btn-xs">{tag}</button>)}
       </div>
          <h2 className="card-title">
          {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By:{author}</p>
          <div className="justify-end card-actions">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    )
}

export default Book