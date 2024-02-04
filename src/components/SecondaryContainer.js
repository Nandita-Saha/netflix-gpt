import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const getMovies = useSelector(store => store.movies);
  return (
    <>
    <MovieList title={"Now Playing"} movies={getMovies?.nowPlayingMovies} />
    </>
  )
}

export default SecondaryContainer