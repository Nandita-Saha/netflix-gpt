import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1',API_OPTIONS);
    const json = await data?.json();

    return json?.results;
    console.log(json.results);
    
  }

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // make an api call to openai and get moview results
    const gptQuery = "Act as a Movie recommendation system and suggest me 5 names of movies with this query:" + searchText.current.value + "comma separated, like sholay, gadar, golmaal, koi mil gya, pathaan. Please don't give any numbered lists, just give us the names."

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    // console.log(gptResults.choices);
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    console.log(gptMovies);

    // for each movie call the tmdb search api 

    const promiseArray = gptMovies.map(movie => searchMovieTmdb(movie)); 
    console.log(promiseArray);
    // returns an array of 5 promises, as they all are assync funcitons 

    const tmdbResults = await Promise?.all(promiseArray);
    
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults:tmdbResults}));
  }

 


  return (
    <div className="bg-black w-full lg:w-1/2 text-center mx-auto mt-[50%] lg:mt-[10%] ">
      <form className="grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          placeholder={lang[langKey].placeholder}
          className="p-4 m-4 col-span-9 rounded-lg"
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-4"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
