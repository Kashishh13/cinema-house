import React from 'react'
import about from '.././images/images.jpeg'
export default function Head({title}) {
  return (
    <div className='w-full bg-gary-900 lg:h-64 h-40 relative overflow-hidden rounded-md'>
        <img src={about} alt='' className='w-full h-full object-cover  bg-black bg-opacity-15'/>
        <div className='absolute lg:top-24 top-16 w-full '>
            <h1 className='text-3xl lg:text-h1 text-white text-center font-black'>
                {title && title}
            </h1>

        </div>
    </div>
  )
}
