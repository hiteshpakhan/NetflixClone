// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyfok_iCtB_C6iqlzcCtFeW55gwm5lBzY",
  authDomain: "netflix-hiteshpakhan.firebaseapp.com",
  projectId: "netflix-hiteshpakhan",
  storageBucket: "netflix-hiteshpakhan.appspot.com",
  messagingSenderId: "743634056049",
  appId: "1:743634056049:web:7964399e71c927a1fc7cd0",
  measurementId: "G-4TLM6KX52W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);