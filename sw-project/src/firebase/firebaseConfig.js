// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_HpvwaqfTPgb5ncu2w9afGyFRwSfxSzY",
  authDomain: "swapi-homework.firebaseapp.com",
  projectId: "swapi-homework",
  storageBucket: "swapi-homework.appspot.com",
  messagingSenderId: "202756005929",
  appId: "1:202756005929:web:7d50f99492bf6a08be7c38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);