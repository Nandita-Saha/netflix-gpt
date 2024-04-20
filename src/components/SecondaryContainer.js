import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black z-10 absolute top-auto lg:top-[90%] w-full overflow-x-hidden'>
    <MovieList title={"Now Playing"} getMovies={movies?.nowPlayingMovies} />
    <MovieList title={"Trending"} getMovies={movies?.nowPlayingMovies} />
    <MovieList title={"Popular"} getMovies={movies?.popularMovies} />
    <MovieList title={"Horror Movies"} getMovies={movies?.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer