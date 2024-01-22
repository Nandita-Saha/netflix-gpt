// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCLhpeNeycxe97F5Np-7mbkMgBPcBMiOE",
  authDomain: "netflixgpt-8b4ed.firebaseapp.com",
  projectId: "netflixgpt-8b4ed",
  storageBucket: "netflixgpt-8b4ed.appspot.com",
  messagingSenderId: "610501377525",
  appId: "1:610501377525:web:18a31ade60bedb8a7b34bc",
  measurementId: "G-EBF1H8RHF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();