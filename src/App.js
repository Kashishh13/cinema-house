
import './App.css';
import All from './screens/All'
import {Routes,Route} from 'react-router-dom'
import Homescr from './screens/Homescr';
import AboutUs from './screens/AboutUs';
import NotFound from './screens/NotFound'

import ContactUs from './screens/ContactUs';
import { useState } from 'react';
import { Favorites } from './screens/Favorites';
import Singlemovie from './screens/Singlemovie';
import WatchPage from './screens/WatchPage';
import Categories from './screens/Categories';

function App() {
  const [fav,setfav]=useState([])
  const addTofav=(mov)=>{
setfav([...fav,mov])
  }
  const handleRemove=(id)=>{
    const update=fav.filter((mov)=>mov.id!==id)
    console.log(update)
    setfav(update)
  }
  
  return (
   
    <>
    <div className='bg-black'>
   
   <Routes>

<Route path='/' element={<Homescr/>}/>
<Route path='/about-us' element={<AboutUs/>}/>
<Route path='*' element={<NotFound/>}/>
<Route path='/categories' element={<Categories addTofav={addTofav}/>}/>
<Route path='/movies' element={<All addTofav={addTofav}/>}/>
<Route path='/contact-us' element={<ContactUs/>}/>
<Route path='/fav' element={<Favorites fav={fav} handleRemove={handleRemove}/>}/>
<Route path='/movie/:id' element={<Singlemovie/>}/>
<Route path='/watch/:id' element={<WatchPage/>}/>

   </Routes>

   </div>
   </>
  );
}

export default App;




