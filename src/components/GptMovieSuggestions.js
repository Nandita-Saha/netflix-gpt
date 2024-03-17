import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {

  const {movieNames, movieResults}  = useSelector((store) => store.gpt);

  if(!movieNames) return null;

  return (
    <div className='bg-black bg-opacity-70 p-4 m-4 text-white'>
      {
        movieNames.map((movieName, index) => (
          <MovieList
          key={movieName}
          title={movieName}
          getMovies={movieResults[index]}
          
          />
        ))
      }
     
    </div>
  )
}

export default GptMovieSuggestions