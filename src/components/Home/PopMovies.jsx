import React from 'react'
import Titles from '../Titles'
import {BsCollectionFill} from 'react-icons/bs'
import Moviedata from '../../data/Moviedata'
import { Link } from 'react-router-dom'

const s = ({addTofav}) => {
  return (
    <div className='my-20 ml-8 mr-8 '>
      <Titles title="Popular Movies" Icon={BsCollectionFill}/>
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 gap-10'>
       {
        Moviedata.slice(8,16).map((movie,index)=>(
          <div className='hover:scale-95 transitions relative rounded overflow-hidden'>
          
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
  )
}

export default s