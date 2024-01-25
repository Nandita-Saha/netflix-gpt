import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

// import headerLogo from "/images/Netflix_Logo_PMS.png";

const Header = () => {

  const navigate = useNavigate();
  

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");

    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

  return (
    <div className='bg-gradient-to-b from-black flex items-center justify-between px-5'>
        <div className='w-44 '>
        <img src="/images/Netflix_Logo_PMS.png" alt='netflix logo' />        
        </div>
        <button onClick={handleSignOut} className='bg-red-500 text-white text-lg font-bold px-4 py-2 rounded-sm'>Sign out</button>
    </div>
  )
}

export default Header