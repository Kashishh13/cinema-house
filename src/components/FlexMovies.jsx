import React from 'react'
import {FaRegCalendarAlt } from 'react-icons/fa'
import {BiTime} from 'react-icons/bi'
const FlexMovies = ({movie}) => {
  return (
<>
<div className='flex items-center gap-2'>
  <span  className='text-medium font-medium'>
    {movie.category}
  </span>
</div>
<div className='flex items-center gap-2'>
    <FaRegCalendarAlt className='text-red-600 w-4 h-4'/>
  <span  className='text-medium font-medium'>
    {movie.year}
  </span>
</div>
<div className='flex items-center gap-2'>
    <BiTime className='text-red-600 w-4 h-4'/>
  <span  className='text-medium font-medium'>
    {movie.time}
  </span>
</div>
</>
  )
}

export default FlexMovies