import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey = useSelector(store=> store.config.lang);
  return (
    <div className='bg-black w-1/2 text-center mx-auto mt-[10%] '>
        <form className='grid grid-cols-12'>
            <input type='text' placeholder={lang[langKey].placeholder} className='p-4 m-4 col-span-9 rounded-lg' />
            <button className='py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-4'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar