import React from 'react';
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import netflixbg from "../utils/netflixbackground.jpg";

const GptSearch = () => {
  return (
    <div>
      
    <div className='w-screen fixed -z-10'>
      <img className='h-screen w-screen object-cover' src={netflixbg} alt='background-netflix-img' />
    </div>
    
    <div className=''>

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </div>
  )
}

export default GptSearch;