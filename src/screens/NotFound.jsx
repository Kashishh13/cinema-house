import React from 'react'
import Layout from '../layout/Layout'
import nf from '.././images/istockphoto-1214472495-640x640.jpg'
const NotFound = () => {
  return (
    <Layout>
      <img src={nf} alt='page not found' className='ml-96'/>
    </Layout>
  )
}

export default NotFound