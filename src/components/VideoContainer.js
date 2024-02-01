import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoContainer = ({movieId}) => {

    const getMovieVideos = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/572802/videos', API_OPTIONS);

        const json = await data.json();
        console.log(json);

    }

    useEffect(()=>{
        getMovieVideos();
    },[]);

  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer