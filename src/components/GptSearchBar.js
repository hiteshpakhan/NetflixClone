import React, { useRef } from 'react';
import lang from "../utils/languageConstance";
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { addGptMovieResult } from '../utils/gptSlice';
import { API_OPTIONS } from '../utils/constants';

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    //making an api call to get movie results

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if (!gptResults.choices) {
      console.log("facing error");
      // TODO: Write Error Handling
    }

    // console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For each movie we will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //but here we will get the promice array and to get the actuall data out of it we have to use promice.all

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  }

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">      
      <form onSubmit={(e)=>e.preventDefault()} className="w-full md:w-1/2 bg-black grid grid-cols-12">
        <input
          ref={searchText}
          type="text"
          className="p-4 m-3 col-span-9 rounded-md shadow-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button onClick={handleGptSearchClick} className="col-span-3 m-3 py-2 px-4 bg-red-700 text-white rounded-lg shadow-md">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar