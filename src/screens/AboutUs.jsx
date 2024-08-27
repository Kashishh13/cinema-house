import React from 'react'
import Layout from './../layout/Layout'
import Head from '../components/Head'
import about2 from '.././images/abc.png'
const AboutUs = () => {
  return (
    <Layout>
      
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="About Us" />
        <div className='xl:py-20  px-4'>
          <div className='grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center'>
            <div>
              <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                Welcome to CinemaHouse
              </h3>
              <div className='mt-3 text-medium leading-8 text-blue-200'>
                <p className='font-semibold'>
                  Stories move us.<br></br>
                  They make us feel more emotion,<br></br> see new perspectives,<br></br>
                  and bring us closer to each other. </p><p className='text-sm pt-4'>At CinemaHouse, we want to entertain the world.
                    Whatever your taste, and no matter where you live, we give you access to best-in-class Web series,
                    documentaries and feature films  Our members control what they want to watch, when they want it,
                    in one simple subscription. We’re streaming in more than 30 languages and 190 countries, because great stories
                    can come from anywhere and be loved everywhere. We are the world’s biggest fans of entertainment, and we’re
                    always looking to help you find your next favorite story.</p>
              </div>
              <div className='grid md:grid-cols-2 gap-6 mt-8'>
                <div className='p-8 bg-blue-200 rounded-lg'>
                  <span className='text-3xl text-black block font-extrabold '>10K </span>
                  <h4 className='text-lg text-gray-800 font-semibold my-2'>Listed Movies </h4>
                  <p className='mb-0 text-black leading-7 text-medium'>Watch Anytime Anywhere<br></br>Enjoy Your Favorite Movies</p>
                </div>
                <div className='p-8 bg-blue-200 rounded-lg'>
                  <span className='text-3xl text-black block font-extrabold '>8K </span>
                  <h4 className='text-lg text-gray-800 font-semibold my-2'>Lovely Users </h4>
                  <p className='mb-0 text-black leading-7 text-medium'>Be The Next One.<br></br> Register Now For Free</p>
                </div>
              </div>
            </div>
<div className=' lg:mt-0 '>
  <img src={about2} alt='about us' className='w-full xl:block hidden rounded-lg object-cover'/>
</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs