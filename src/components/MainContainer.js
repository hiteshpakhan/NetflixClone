import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTital";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    if (!movies) return;  // most IMP this is called early return
    //here if the movies is empty then it will return from here

    const mainMovie = movies[0];  //here we will need first movie to show the on video on background
    
    const { original_title, overview, id } = mainMovie;
    
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer