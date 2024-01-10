// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/compat/storage";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQxI7Ik3jBMcYkD4tV--Bi6ui3lNeaDFw",
  authDomain: "entepenuer-wood.firebaseapp.com",
  projectId: "entepenuer-wood",
  storageBucket: "entepenuer-wood.appspot.com",
  messagingSenderId: "283788201233",
  appId: "1:283788201233:web:afc2cd40494c6eb49590b0",
  measurementId: "G-9YRVBNY7HJ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export const storage = firebase.storage();

// const analytics = getAnalytics(app);
