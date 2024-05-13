import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black z-10 absolute top-auto lg:top-[90%] w-full overflow-x-hidden'>
    <MovieList title={"Now Playing"} getMovies={movies?.nowPlayingMovies} />
    <MovieList title={"Top Rated"} getMovies={movies?.topRatedMovies} />
    <MovieList title={"Popular"} getMovies={movies?.popularMovies} />
    <MovieList title={"Upcoming"} getMovies={movies?.upcomingMovies} />
    </div>
  )
}

export default SecondaryContainer