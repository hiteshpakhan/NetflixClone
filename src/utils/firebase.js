// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxvkapW5L-Ux-Llw0p2TyTL20b7Ugq0AE",
  authDomain: "hitesh-appclone.firebaseapp.com",
  projectId: "hitesh-appclone",
  storageBucket: "hitesh-appclone.appspot.com",
  messagingSenderId: "761194241737",
  appId: "1:761194241737:web:dcacfc73bcf86cde707718",
  measurementId: "G-5GPTDN90CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();