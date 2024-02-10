import React from 'react';
import lang from "../utils/languageConstance";
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">      
      <form className="bg-gray-900 bg-opacity-50 drop-shadow-2xl rounded-md w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-md shadow-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg shadow-md">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar