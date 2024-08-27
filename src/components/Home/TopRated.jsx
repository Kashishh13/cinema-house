import React from 'react'
import Titles from '../Titles'

import { Swiper, SwiperSlide } from 'swiper/react'
import { BsBookmarkStarFill} from 'react-icons/bs'
import { Autoplay} from 'swiper/modules'
import Moviedata from './../../data/Moviedata'
import { Link } from 'react-router-dom'
import Rating from '../Stars'
const TopRated = () => {

  return (
    <div className='my-8 mx-8 '>
      <Titles title="Most Watched" Icon={BsBookmarkStarFill} />
      <div className='my-10'>
        <Swiper 
        
          slidesPerView={4} spaceBetween={40}
          loop={true}
          speed={1000}
         modules={[Autoplay]}
         autoplay={{ delay: 1000, disableOnInteraction: false }}
        >
          {
            Moviedata.slice(1,16).map((movie, index) => (
              <SwiperSlide key={index}>
                <div className='p-1 w-120 h-48 border-blue-200 rounded-lg  cursor-pointer border  hover:scale-95 transitions relative overflow-hidden '>
               <Link to={`/movie/${movie?.name}`}>
               <img src={movie.titleimg} alt=''
                    className='w-full h-full object-cover rounded-lg bg-black opacity-55 ' />
               </Link>
               <div className='flex gap-2 text-yellow-600 absolute left-24 top-40 '>
                <Rating value={movie.rate}/>
               </div>
                 
              </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        
      </div>
    </div>
  )
}

export default TopRated