import React from 'react'
import { Link } from 'react-router-dom'
import { ImCross } from "react-icons/im";
import Layout from '../layout/Layout';
import favs from '.././images/fav.jpg'
export const Favorites = ({fav,handleRemove}) => {
  return (
    <Layout>
  
  <div className='relative'>


<img src={favs} alt=''
  className='w-full  bg-black  opacity-50  object-fill' />
<div className='absolute top-8 bottom-0 right-0 left-0'>
  <div className='ml-96'>
<Link to='/movies' className='ml-80'><button className='h-12 w-44 bg-white text-black mb-4 ml-96  hover:bg-blue-200'>Add Movies</button></Link>
        
        </div>
           <div className='my-2 ml-8 mr-8 '>
        <div className='grid sm:mt-12 mt-6 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 gap-10'>
          {
            fav.map((movie, index) => (
              <div className='hover:scale-95 transitions relative rounded overflow-hidden'> 
              <h1><ImCross onClick={()=>{handleRemove(movie.id);
              alert("Removed From favourites")}} className='bg-blue-200 bg-opacity-40 rounded-full p-2 text-3xl hover:text-red-400 cursor-pointer'/></h1>
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
       
      </div>
    
      </div>
    </div>
    </Layout>
  )
}
