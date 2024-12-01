// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKDdUgGkVlXMovK2QfS5P1uBuIFPtx0CQ",
  authDomain: "coffee-store-bf9a0.firebaseapp.com",
  projectId: "coffee-store-bf9a0",
  storageBucket: "coffee-store-bf9a0.firebasestorage.app",
  messagingSenderId: "436387186622",
  appId: "1:436387186622:web:73502fd86f5d084c751bef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);