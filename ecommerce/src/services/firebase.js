// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUOzu5HuO2Z3ogikk_Ke0kiOAqPOKeN7I",
  authDomain: "eccommercecoder.firebaseapp.com",
  projectId: "eccommercecoder",
  storageBucket: "eccommercecoder.firebasestorage.app",
  messagingSenderId: "328065409170",
  appId: "1:328065409170:web:090fa5410d0d581d9a464b",
  measurementId: "G-7KWM3Q2ENG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(app); // ← AGREGAR ESTO