import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "mymoney-bde29.firebaseapp.com",
  projectId: "mymoney-bde29",
  storageBucket: "mymoney-bde29.appspot.com",
  messagingSenderId: "701676053837",
  appId: "1:701676053837:web:97d0f796e1fb50c4fec304",
  measurementId: "G-6VF34CK911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);

export {fireDb, app};