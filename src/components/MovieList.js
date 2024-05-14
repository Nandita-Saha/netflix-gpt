import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, getMovies}) => {
    // console.log(getMovies);
    // const posterImg = getMovies?.poster_path;
    // console.log(getMovies[0]?.poster_path);
    
  return (
    <div className='py-4 md:py-10 px-2 md:px-6 '>
            <h1 className='text-lg md:text-3xl mb-5 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex '>
              {
                getMovies &&               
                getMovies.map((getMovie) => (
                  <MovieCard key={getMovie.id} posterPath={getMovie?.poster_path}  />
                ))
              }
            </div>
            
        </div>
    </div>
  )
}

export default MovieList