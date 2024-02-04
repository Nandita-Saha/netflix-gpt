import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] absolute bg-gradient-to-r w-full aspect-video from-black to-transparent text-white px-8 '>
        <h1 className='text-5xl font-bold' >{title}</h1>
        <p className='mt-6 w-1/3'>{overview}</p>
        <div className='flex items-center jsutify-between mt-6'>
            <button className='px-16 py-2 bg-gray-200 text-black text-lg rounded-md mr-6'>Play</button>
            <button className='px-8 py-2 bg-gray-500 text-white rounded-md text-lg  bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle