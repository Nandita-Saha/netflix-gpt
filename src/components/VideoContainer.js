import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoContainer = ({ movieId }) => {
  const getTrailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+ getTrailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"  
        
        allow="autoplay;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
