import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    
    <div className='w-24 md:w-48 mr-2'>
     
      <img alt='movie card' src={IMG_URL + posterPath} />
    </div>
  )
}

export default MovieCard