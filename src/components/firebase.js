// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKq4BuZ2QFQ1buoz6MEHtA_QAnNMTTIaU",
  authDomain: "evote-afb09.firebaseapp.com",
  projectId: "evote-afb09",
  storageBucket: "evote-afb09.appspot.com",
  messagingSenderId: "948463351298",
  appId: "1:948463351298:web:92150787cc30187442591b",
  measurementId: "G-8HV71J01SD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db=getFirestore(app);
export default app;