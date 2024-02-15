import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'


const GptSearch = () => {
  return (
    <div className=' bg-loginimage bg-cover bg-center w-full h-full min-h-screen overflow-x-hidden' >
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch