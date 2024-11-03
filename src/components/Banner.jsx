import React from 'react'
import bannerImg from '../assets/books.jpg'

const Banner = () => {
    return (
        <div className="bg-gray-200 min-h-screen hero">
        <div className="lg:flex-row-reverse flex-col hero-content">
          <img 
            src={bannerImg} 
            className="shadow-2xl rounded-lg w-96 max-w-sm h-96" />
          <div>
            <h1 className="font-bold text-5xl">Books to freshen up your bookshelf</h1>
           
            <button className="bg-[#23BE0A] hover:bg-[#23BE0A] mt-10 border-none btn btn-primary">View The List</button>
          </div>
        </div>
      </div> )
}

export default Banner