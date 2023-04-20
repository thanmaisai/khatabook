// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFruMYAre8z0Gek7xn5bJSe4ykrXa_UA4",
  authDomain: "khathabook-bdbf0.firebaseapp.com",
  projectId: "khathabook-bdbf0",
  storageBucket: "khathabook-bdbf0.appspot.com",
  messagingSenderId: "211783876218",
  appId: "1:211783876218:web:d8b4a6bb4e1a16cf2945c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//this may throw a error
const firedb =  getFirestore(app);

export {firedb,app};