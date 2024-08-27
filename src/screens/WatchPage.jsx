import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import Layout from '../layout/Layout'
import Moviedata from '../data/Moviedata'
import { BiArrowBack } from 'react-icons/bi'
import { FaPlay } from 'react-icons/fa'
import vd from '../data/videoplayback.mp4'

const WatchPage = () => {
    let {id} = useParams()
    const movie =Moviedata.find((movie)=>movie.name===id);
    const [play,setPlay]=useState(false)
  return (
    <Layout>
      <div className='container mx-auto mt-8 bg-blue-200 p-6 mb-12'>
        <div className='flex flex-wrap mb-6  rounded border bg-black text-white border-white'>
            <Link to={`/movie/${movie.name}`} className='md:text-xl text-sm flex gap-3 items-center font-bold text-white p-4'>
<BiArrowBack className=''/>{movie.name}
            </Link>
          
        </div>
        {
            play ? (
                <video controls autoPlay={play} className='w-full h-screen rounded'>
                    <source src={vd} type='video/mp4' title={movie.name}/>
                </video>
            ) : (
                <div className='w-full h-screen rounded-lg overflow-hidden relative'>
                    <div className='absolute top-0 bottom-0 right-0 left-0 pl-48 bg-black opacity-30 flex-col'>
                        <button onClick={()=>setPlay(true)} className='bg-white pl-8 pt-8 ml-96 mt-60 text-black flex-col border border-white rounded-full w-24  h-24 font-black text-3xl'>
                            <FaPlay/>
                        </button>
                        </div>
                        <img src={movie?.image} alt={movie.name} className='w-full h-full object-cover rounded-lg'/>
                    </div>
            )
            
        }
       </div>
    </Layout>
  )
}

export default WatchPage