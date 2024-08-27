import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Moviedata from './../../data/Moviedata'
import { Autoplay } from 'swiper/modules'
import FlexMovies from '../FlexMovies'
import {Link} from 'react-router-dom'
const Banner = () => {
  return (
    <div className='relative top-10 bottom-5 mx-5'>
      <Swiper
        direction='vertical'
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        className='w-full  xl:h-96 bg-black lg:h-64 h-48 '>

        {Moviedata.slice(0,8).map((movie, index) => (
          <SwiperSlide key={index} className='border border-blue-200 p-1 relative rounded-lg overflow-hidden outline-none'>
            {/* <img src={`/images/movies/${movie.image}`}
                  className='w-full h-100 object-cover' alt=''/> */}
            <img src={movie.image} alt={movie.name}
              className='w-full object-cover bg-black bg-opacity-15' />
<div className='absolute  xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
<div className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-black text-black '>
 <img src= {movie.iname} alt=''/>
</div >
<div className='flex gap-4 items-center text-white'>
  <FlexMovies movie={movie}/>
</div>
<div className='flex gap-5 items '>
  <Link to={`/movie/${movie.name}`} className='bg-blue-200 hover:text-white transitions text-black px-8 py-3 rounded font-medium sm:text-sm text-xs '>
View
  </Link>
 
</div>
</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner