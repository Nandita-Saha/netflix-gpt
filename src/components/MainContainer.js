import React from 'react'
import { useSelector } from 'react-redux'
import VideoContainer from './VideoContainer';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const getMovies = useSelector(store => store.movies?.nowPlayingMovies);
    // console.log("movies =>", getMovies);
    if(!getMovies) return;

    const mainMovie = getMovies[0];
    console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;


  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoContainer movieId={id} />

    </div>
  )
}

export default MainContainer