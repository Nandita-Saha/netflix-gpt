import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PROFILE_AVATAR } from "../utils/constants";

const Login = () => {
 
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null); // we are using useref to catch the reference of the input of email field
  const email = useRef(null); // we are using useref to catch the reference of the input of email field
  const password = useRef(null); // we are using useref to catch the reference of the input of password field

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validate the form data

    console.log(email?.current?.value); // prints the value recieved in input field
    console.log(password?.current?.value);
    const message = CheckValidData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    ); // prints the validation message coming from validate.js

    // console.log(message);
    setErrorMessage(message); //setting the error message

    if (message) return;

    // sign in/ sign up

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // update the user profile by including displayname
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative bg-loginimage bg-cover bg-center w-full h-full min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 bg-gradient-to-b from-black  bg-cover bg-center w-full w-full">
        <Header />
        <div className="m-auto mt-28 mb-28 w-1/3 min-w-[450px] bg-[#000000bf] p-12">
          <h1 className="text-white mb-10 text-3xl font-bold ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={(e) => e.preventDefault()} className="text-white">
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full my-5 p-3 block bg-[#333] rounded"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="w-full my-5 p-3 block bg-[#333] rounded"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full my-5 p-3 block bg-[#333] rounded"
            />
            <p className="text-red-500 py-2 mb-5 font-bold">{errorMessage}</p>
            <button
              className="py-4 w-full mb-10 bg-red-600 text-white rounded font-bold"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p
              className="py-4 text-gray-200 cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to NetflixGPT? Sign Up Now"
                : "Already registered? Sign In"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
