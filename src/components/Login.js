import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data
    
  }

  return (
    <div className="relative bg-loginimage bg-cover bg-center w-full h-full min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 bg-gradient-to-b from-black  bg-cover bg-center w-full w-full">
        <Header />
        <div className="m-auto mt-28 mb-28 w-1/3 min-w-[450px] bg-[#000000bf] p-12">
          <h1 className="text-white mb-10 text-3xl font-bold ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form className="text-white">
          {!isSignInForm && 
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-10 p-3 block bg-[#333] rounded"
            />          
          }
            <input
              type="text"
              placeholder="Email Address"
              className="w-full mb-10 p-3 block bg-[#333] rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-10 p-3 block bg-[#333] rounded"
            />
            <button className="py-4 w-full mb-10 bg-red-600 text-white rounded font-bold" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            
            <p className="py-4 text-gray-200 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to NetflixGPT? Sign Up Now" : "Already registered? Sign In"}
              
                         
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
