import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black z-10 relative -top-52'>
    <MovieList title={"Now Playing"} getMovies={movies?.nowPlayingMovies} />
    <MovieList title={"Trending"} getMovies={movies?.nowPlayingMovies} />
    <MovieList title={"Popular"} getMovies={movies?.nowPlayingMovies} />
    <MovieList title={"Horror Movies"} getMovies={movies?.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer