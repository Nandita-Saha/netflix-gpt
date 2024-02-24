import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = () => {
    console.log(searchText.current.value);
  }


  return (
    <div className="bg-black w-1/2 text-center mx-auto mt-[10%] ">
      <form className="grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          placeholder={lang[langKey].placeholder}
          className="p-4 m-4 col-span-9 rounded-lg"
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-4"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
