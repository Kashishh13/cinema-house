import React, { useState } from 'react'
import Layout from '.././layout/Layout'

import Moviedata from '.././data/Moviedata'

import { Link } from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'

const All = ({addTofav}) => {
  const maxPage = 8
  const [page, setPage] = useState(maxPage)
  const HandleLoadingMore = () => {
    setPage(page + maxPage)
  }
 

  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
     

      </div>
      <div className='my-10 ml-8 mr-8 '>
        <div className='grid sm:mt-12 mt-6 xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-10'>
          {
            Moviedata.slice(0,page)?.map((movie, index) => (
              <div className='hover:scale-95 transitions relative rounded overflow-hidden'>
    <h1><FaHeart onClick={() => {
          addTofav(movie);
        alert('Movie Added To favourites');
        }}className='bg-blue-200 bg-opacity-40 rounded-full p-2 text-3xl hover:text-red-400 cursor-pointer'/></h1>
     <Link to={`/movie/${movie?.name}`} className='w-full'>
      <img src={movie?.image} alt={movie?.name}
      className='w-full h-64 object-cover'></img>
      </Link> 
      
      <div className='absolute left-0 bottom-0 right-0 text-center bg-black bg-opacity-60 text-white px-4 py-3 '>
        <h3 className='font-semibold truncated'>
          {movie?.name}
        </h3>
        
      </div>
    </div>
           
            ))
          }
        </div>
        {/*Loading More*/}
        <div className='w-full text-center md:my-20 my-10 '>
          <button onClick={HandleLoadingMore} className=' text-white py-3 px-8 rounded font-semibold border  border-blue-200 hover:text-blue-200 '>
            See More 
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default All