import React, {useEffect} from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/constants";


// import headerLogo from "/images/Netflix_Logo_PMS.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newUser = useSelector((store) => store.user);
  // console.log(newuser);
  // console.log(newuser.photoURL);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
       
      })
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

    return ()=> unsubscribe();
  }, []);

const handleGptSearchClick = ()=>{
  // toggle gptsearch button
  dispatch(toggleGptSearchView());

}

  return (
    <div className="bg-gradient-to-b absolute top-0 z-50 w-full from-black flex items-center justify-between px-5">
      <div className="w-44 ">
        <img src="/images/Netflix_Logo_PMS.png" alt="netflix logo" />
      </div>

      {newUser && (
        <div>
          <select>
            {SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
           
          </select>
          <button className="bg-green-700 text-white rounded-sm mx-5 p-3" onClick={handleGptSearchClick}>GPT Search</button>
          <img
            className="w-10 h-10 mr-5 rounded-lg inline-block"
            src={newUser?.photoURL}
            alt="profile_img"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white text-lg font-bold px-4 py-2 rounded-sm"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
