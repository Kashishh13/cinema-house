import React from 'react'
import Layout from './../layout/Layout'
import Head from '../components/Head'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'
const ContactUs = () => {

  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="Contact Us" />
        <div className='grid mg:grid-cols-2 gap-6 lg:my-20  lg:grid-cols-3 xl:gap-8'>
          {/* {
            ConData.map((item) => (
              <div key={item.id} className='border border-gray-900 flex-col p-5 rounded-lg text-center bg-blue-200'>
                <span className=' text-center text-3xl '>
                  <item.icon className='rounded-full p-2 bg-black text-blue-200  text-5xl '/>
                </span>
                <h5 className='text-xl font-semibold mb-2 text-gray-800'>{item.title}</h5>
                <p className=' text-medium text-black leading-7'>
                  <a href={`mailto${item.contact}`} className='text-blue-800 '>
                    {item.contact}
                   
                  </a>
                  {' '}{item.info}
                </p>
              </div>
            ))
          } */}
           <div className='border border-gray-900 flex-col p-5 rounded-lg text-center bg-blue-200'>
                <span className=' text-center text-3xl '>
                  <FiMail className='rounded-full p-2 bg-black text-blue-200  text-5xl '/>
                </span>
                <h5 className='text-xl font-semibold mb-2 text-gray-800'>E-mail Us</h5>
                <p className=' text-medium  text-black leading-7'>
                <a href="mailto:guptakashishh13@gmail.com" className='text-blue-700 underline'>
                  guptakashishh13@gmail.com
                </a>
                  {' '}Tell Us more and we will find the best solution for you
                </p>
              </div>
              <div className='border border-gray-900 flex-col p-5 rounded-lg text-center bg-blue-200'>
                <span className=' text-center text-3xl '>
                  <FiPhoneCall className='rounded-full p-2 bg-black text-blue-200  text-5xl '/>
                </span>
                <h5 className='text-xl font-semibold mb-2 text-gray-800'>Call Us</h5>
                <p className=' text-medium  text-black leading-7'>
                <a href="tel:+12133522795"  className='text-blue-700 underline'>
                +12133522795
                </a>
                  {' '}Tell Us more and we will find the best solution for you
                </p>
              </div>
              <div className='border border-gray-900 flex-col p-5 rounded-lg text-center bg-blue-200'>
                <span className=' text-center text-3xl '>
                  <FiMapPin className='rounded-full p-2 bg-black text-blue-200  text-5xl '/>
                </span>
                <h5 className='text-xl font-semibold mb-2 text-gray-800'>Location</h5>
                <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="300" height="100" loading="lazy" title="Google Map" className='pl-16'></iframe>
               
              </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs