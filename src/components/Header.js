import React, { useState,useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newUser = useSelector((store) => store.user);
  const getShowGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // console.log(newuser);
  // console.log(newuser.photoURL);

  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  const handleMobileClick = ()=>{
    mobileNavIsOpen ? setMobileNavIsOpen(false) : setMobileNavIsOpen(true);
  }

  window.addEventListener("resize", () => {
    window.innerWidth > 600 && setMobileNavIsOpen(false);
  });

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // toggle gptsearch button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };



  return (
    <div className=" bg-black absolute top-0 z-50 w-full flex lg:flex-row items-center justify-between px-5">
      <div className="w-24 lg:w-44 ">
        <img src="/images/Netflix_Logo_PMS.png" alt="netflix logo" />
      </div>
      <img
        className="menu_icon lg:hidden"
        src="/images/menu.png"
        alt="hamburger menu icon"
        onClick={handleMobileClick}
      />

      <div className={mobileNavIsOpen ? "flex" : "hidden"}>
      {newUser && (
        <div>
          {getShowGptSearch && <select
            className="bg-gray-900 p-2 m-2 text-white"
            onClick={handleLanguageChange}
          >
            {SUPPORTED_LANG.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className="bg-green-700 text-white text-md lg:text-lg rounded-sm px-2 lg:mx-5 p-1 lg:p-3"
            onClick={handleGptSearchClick}
          >
           {getShowGptSearch ? "Homepage" : "GPT Search" }
          </button>
          <img
            className="w-5 lg:w-10 h-5 lg:h-10 mr-5 ml-5 lg:ml-0 rounded-lg inline-block"
            src={newUser?.photoURL}
            alt="profile_img"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white text-md lg:text-lg font-bold px-2 lg:px-4 py-1 lg:py-2 rounded-sm"
          >
            Sign out
          </button>
        </div>
      )}

      </div>
    </div>
  );
};

export default Header;
