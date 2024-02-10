import React from 'react';
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import netflixbg from "../utils/netflixbackground.jpg";

const GptSearch = () => {
  return (
    <div>
      
    <div className='absolute -z-10'>
      <img src={netflixbg} alt='background-netflix-img' />
    </div>
    
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch;