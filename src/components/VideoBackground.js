import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({movieId}) => {

  const getMovieVideo = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    console.log("json data ==",json);

    const filterData = json.results.filter((video)=> video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground;