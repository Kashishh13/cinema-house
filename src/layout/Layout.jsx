import React from 'react'
import Nav from './Navbar/Nav'
import Footer from './Footer/Footer'
const Layout = ({children}) => {
  return (
    <>
    <div className='bg-black text-white bottom-0'>
       <Nav/>
        {children}
        <Footer/>
    </div>
    </>
  )
}

export default Layout