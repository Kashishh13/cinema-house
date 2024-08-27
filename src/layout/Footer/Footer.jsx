import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/Screenshot 2024-04-09 215526.png'
const Footer = () => {
  const Links = [
    {
      title: 'Company',
      links: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'About Us',
          link: '/about-us'
        },
        {
          name: 'Contact Us',
          link: '/contact-us'
        },
        {
          name: 'Movies',
          link: '/movies'
        },
      ]
    },
    {
      title: 'Top Categories',
      links: [
        {
          name: 'Action',
          link: '/categories'
        },
        {
          name: 'Romantic',
          link:  '/categories'
        },
        {
          name: 'Drama',
          link:  '/categories'
        },
        {
          name: 'Historical',
          link:  '/categories'
        },
      ]
    },
    {
      title: 'My Account',
      links: [
        {
          name: 'Dashboard',
          link: '#'
        },
        {
          name: 'Favourites',
          link: '/fav'
        },
        {
          name: 'Profile',
          link: '#'
        },
        {
          name: 'Change Password',
          link: '#'
        },
      ]
    },
  ]
  return (
    <div className='bg-blue-200  mt-0 border-black'>
      <div className='container mx-auto px-2'>
        <div className='grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 sm:gap-9 lg:gap-11 xl:gap-7 gap-5 py-7 justify-between'>
          {Links.map((link,index)=>(
            <div key={index} className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'>
<h3 className='text-lg font-bold text-black lg:leading-7  mb-4 sm:mb-5 lg:mb-6 pb-0.5'>
  {link.title}
</h3>
<ul className='text sm flex flex-col space-y-3'>
  {link.links.map((text,index)=>(
<li key={index} className='flex items-baseline'>
  <Link to={text.link} className='text-black inline-block w-full hover:underline hover:text-blue-700'>
    {text.name}
  </Link>
</li>
  ))}
</ul>
            </div>
          ))}
          <div className='pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3'>
            <Link to='/'>
              <img src={logo} alt=''className='w-60 mt-10'></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer