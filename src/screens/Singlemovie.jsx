import React from 'react'
import Layout from '../layout/Layout'
import {useParams} from 'react-router-dom'
import Moviedata from '../data/Moviedata'
import '.././components/FlexMovies'
import FlexMovies from '.././components/FlexMovies'
import { Link } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
import Titles from '.././components/Titles'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { Message } from '.././components/Single/UserInput'
import UserData from '.././data/UserData'
import Rating from '../components/Stars'

const Singlemovie = () => {
 
    const {id} = useParams ()
    const movie =Moviedata.find((movie)=>movie.name === id)
  return (
  <Layout>
    <div className='relative'>


<img src={movie.image} alt={movie.name}
  className='w-full  bg-black  opacity-20  object-fill' />
<div className='absolute top-0 bottom-0 righ-0 left-0 flex flex-row'>
  <div className='ml-36 mt-40 flex flex-col gap-8'>
    <img src={movie.titleimg} alt={movie.name} className='h-64  border-4 border-blue-200 p-1 rounded-lg' />

  </div>

  <div className='ml-60'>
    <img src={movie.iname} alt={movie.name} className='h-40 w-80 mt-40 ' />
    <div className='flex gap-4 items-center text-white mt-8'>
      <FlexMovies movie={movie} />
    </div>
    <div className='items-center text-white mt-8 font-bold'>
      Language : {movie.language}
      <Link to={`/watch/${movie.name}`} className='bg-white ml-48 h-8 hover:text-white  hover:bg-black rounded-xl transitions text-black  px-8 pt-4 py-4 font-medium sm:text-sm text-sm '>
        Watch
      </Link>
      
    </div>
  </div>


</div>
<div className='absolute top-72 mt-44 ml-36 mr-96 font-bold text-justify'>{movie.desc}</div>


</div>
<div>

<div className=' flex flex-row mt-8'>
  <h1 className='font-black text-3xl  ml-36 text-white'><FaUsers /> </h1>
  <h1 className='font-black text-3xl  ml-4 text-white'> Casts </h1>
</div>

<div className='flex flex-row  gap-20 container px-36 py-10 transitions cursor-pointer'>

  <img src={movie?.a1} alt={movie.n1} className='border-2 bg-blue-200 border-blue-200 p-2 ' />
  <img src={movie?.a2} alt={movie.n1} className='border-2 bg-blue-200 border-blue-200 p-2 ' />
  <img src={movie?.a3} alt={movie.n1} className='border-2 bg-blue-200 border-blue-200 p-2 ' />
  <img src={movie?.a4} alt={movie.n1} className='border-2 bg-blue-200 border-blue-200 p-2 ' />
  <img src={movie?.a5} alt={movie.n1} className='border-2 bg-blue-200 border-blue-200 p-2 ' />

</div>

</div>
<div className='my-12 mx-36'>
      <Titles title="Reviews" Icon={BsBookmarkStarFill} />
      <div className='mt-5 xl:grid flex-col grid-cols-5 gap-12 py-4 px-4 bg-blue-200 rounded'>
        {/* write reviews */}
        <div className='xl:col-span-2 w-full flex flex-col gap-2'>
          <h3 className='tet-2xl text-black font-semibold'>Review "{movie?.name}"</h3>

          <Message placeholder="Write Your review here" />
          <button className='bg-black text-white hover:bg-white hover:text-black pl-44 py-3 w-full flex-col rounded'>
            Submit
          </button>
        </div>
        <div className='col-span-3  flex flex-col gap-6'>
          <h3 className='text-xl text-black font-semibold'>Reviews : {movie.reviews}</h3>
          <div className='w-full flex flex-col bg-black gap-6 rounded-lg md:p-12 p-6 h-48 overflow-y-scroll'>
{
  UserData.map((user,i)=>(
    <div className='md:grid flex flex-col w-full grid-cols-12 gap-6 bg-blue-200 border border-black rounded '>
      <div className='col-span-2 hidden md:block'>
        <img src={user.image} alt={user.fname} className='h-full w-full rounded-lg'></img>
      </div>
      <div className='col-span-7 flex flex-col gap-2'>
        <h2 className='text-black font-bold'>{user.fname}</h2>
        <p className='text-xs leading-6 font-medium text-black '>{user.message}</p>
        </div>
        <div className='col-span-3 flex pt-5 flex-row border-l text-xs gap-1 text-yellow-700'>
          <Rating value={user.rate}/>
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

export default Singlemovie