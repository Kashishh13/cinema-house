import React,{useState,useEffect} from "react";
import Layout from "../layout/Layout";
import { Link } from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'

const Categories = ({addTofav}) => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
  
   
    const [selectedCategory, setSelectedCategory] = useState('All');
  
   
    useEffect(() => {
      fetch('/all.json')
        .then(response => response.json())
        .then(data => {
          setMovies(data);
          setFilteredMovies(data);
        })
        .catch(error => console.error('Error loading project data:', error));
    }, []);
  
    // Function to handle category filter selection
    const handleFilterClick = (category) => {
      setSelectedCategory(category);
      // if (category === 'All') {
      //   setFilteredMovies(projects);
      // } else {
        const filtered = movies.filter(project => project.category === category);
        setFilteredMovies(filtered);
    //  }
    };
  return (
    <Layout>
    
      <div className="mt-8 mb-8 flex flex-row">
        <div className="ml-6 mt-6 w-72  pt-4 pb-4 pl-4">
        {['Action','Romance','Drama','Comedy','Crime','BioPic','Horror','Sports','Adventure','Historical','Mystery','Fantasy'].map(category => (
          <h1 className="bg-blue-200 p-2 mt-9 font-bold rounded-lg text-center cursor-pointer hover:bg-white text-black" key={category}>
            <button
              onClick={() => handleFilterClick(category)}
             
            >
              {category}
            </button>
          </h1>
        ))}
        </div>
      

 
    

      
      

      {/* Movie items */}
      <div className=' ml-10 mr-8 '>
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-10'>
      {
            filteredMovies.slice(0,5).map((movie, index) => (
              <div className='hover:scale-95 transitions relative rounded overflow-hidden'>
                
    <h1><FaHeart onClick={()=> { addTofav(movie);
        alert('Movie Added To favourites');}}className='bg-blue-200 bg-opacity-40 rounded-full p-2 text-3xl hover:text-red-400 cursor-pointer'/></h1>
     <Link to={`/movie/${movie?.name}`} className='w-full'>
      <img src={movie?.image} alt={movie?.name}
      className='w-full h-64 object-cover'></img>
      </Link> 
      
      <div className='absolute left-0 bottom-0 right-0 text-center bg-black bg-opacity-60 text-white px-4 py-3 '>
        <h3 className='font-semibold truncated'>
          {movie?.name}
        </h3>
        
      </div>
    </div>
           
            ))
          }
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default Categories;
