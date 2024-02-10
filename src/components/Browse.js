import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <>
    <Header />
    <MainContainer />
    <SecondaryContainer />
    {
      /*
        MainContainer
          - video container
          - video background
        SecondaryContainer
          - movielist * n
          - cards * n
      */
    }


    <div>Browse</div>
    </>
  )
}

export default Browse