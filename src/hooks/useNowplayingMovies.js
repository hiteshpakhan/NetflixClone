import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

      const getNowMoviesPlaying = async () => {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?page=1', 
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
      };

      useEffect(() => {
        !nowPlayingMovies && getNowMoviesPlaying();   //this is an if statement if the nowplayingmovies is empty then only make this api calls 
      }, [])

};

export default useNowPlayingMovies;