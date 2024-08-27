import React from 'react'
import {FiUser} from 'react-icons/fi'
import mob from '../../images/abc.png'
const Promos = () => {
  return (
    <div className='mt-20 mb-12 mx-20 py-10 md:px-20 px-8 bg-blue-200'>
      <div className='grid grid-cols-2 lg:grid-cols-2 lg:gap-10 items-center'>
        <div className='flex lg:gap-10 gap-6 flex-col'>
          <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed text-black'>
            Downlaod Movies to Watch Offline.<br/> Enjoy with CinemaHouse
          </h1>
          <p className='text-gray-800 xl:text-base text-sm leading-6 xl:leading-8'>
          You can download a majority of the content onto your iOS, Android mobile and tablet devices. You can watch downloaded content without an internet connection.​

​

To download content on the mobile application, update your App to the latest version
          </p>
          <div className='flex gap-4 md:text-lg text-sm cursor-pointer '>
            <div className='flex-colo bg-black text-blue-200 px-6 py-3 rounded-md font-bold'>
              HD 4K
            </div>
            <div className='grid grid-cols-2 gap-2 bg-black text-blue-200 px-6 py-3 rounded-md font-bold'>
          <FiUser/> 2K
            </div>
          </div>
        </div>
        <div>
          <img src={mob} alt='' className='w-full object-contain rounded-5xl h-80'/>
        </div>
      </div>
    </div>
  
    )
}

export default Promos