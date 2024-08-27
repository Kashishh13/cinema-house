import React from 'react'
import Layout from '../layout/Layout'
import Banner from '../components/Home/Banner'
import PopMovies from '../components/Home/PopMovies'
import TopRated from '../components/Home/TopRated'
import Promos from '../components/Home/Promos'
const Homescr = () => {
  return (
    <Layout>
        <div>
          <Banner/>
          <PopMovies />
          <Promos/>
          <TopRated/>
        </div>
    </Layout>
  )
}

export default Homescr