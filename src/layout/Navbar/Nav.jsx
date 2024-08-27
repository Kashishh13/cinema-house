import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/Screenshot 2024-04-09 215526.png'
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import { FaHeart } from "react-icons/fa";
const Nav = () => {
  return (
    <>
      <div className='bg-black shadow-md sticky top-0 z-20'>
        <div className=' bg-blue-200 py-2 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
          {/* Logo */}
          <div className='col-span-1 lg:block hidden'>
            <Link to='/'><img src={logo} alt='' className='ml-6 w-full h-14 object-contain top-0'></img></Link>
          </div>
          {/* Search */}
          <div className='col-span-3'>

            <form class="max-w-md mx-auto">
              <div class="relative">

                <input type="search" id="default-search" class="block w-full p-4 ps-4 text-sm h-15 text-white border-none outline-none rounded-lg bg-black"
                  placeholder="Search Your Movie Here" required />
                <button type="submit"
                  class="text-black absolute end-2.5 bottom-2.5 bg-blue-200 hover:bg-black hover:text-white outline-none font-medium rounded-lg text-sm px-4 py-2">
                  <FaSearch /></button>
              </div>
            </form>

          </div>
          {/* Menu */}
          <div className='col-span-3 text-sm mr-12 font-bold hidden xl:gap-10 2xl:gap-20 justify-between lg:flex xl:justify-end items-center'>
          
            <NavLink to='/movies' className="text-black  hover:text-gray-400 py-1 px-1">Movies</NavLink>
            <NavLink to='/categories' className="text-black hover:text-gray-400 py-1 px-1">Categories</NavLink>
            <NavLink to='/about-us' className="text-black  hover:text-gray-400 py-1 px-1">About Us</NavLink>
            <NavLink to='/contact-us' className="text-black  hover:text-gray-400 py-1 px-1">Contact Us</NavLink>
           
            <NavLink to='/fav' className="text-black hover:text-red-500 py-1 px-1"><FaHeart className='w-8 h-8'/></NavLink>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default Nav