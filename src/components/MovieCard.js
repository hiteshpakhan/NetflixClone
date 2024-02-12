import React from 'react'
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {  

  //if the poster image path is not present then skip it and dont show
  if (!posterPath) return null;
  
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt='Movie Card' src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard