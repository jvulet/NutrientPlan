// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpu_Y-6VvEiYq7FP1lnpDwG-9r6T0HLjE",
  authDomain: "my-app-8c6a4.firebaseapp.com",
  projectId: "my-app-8c6a4",
  storageBucket: "my-app-8c6a4.appspot.com",
  messagingSenderId: "212040166805",
  appId: "1:212040166805:web:14b279a2c6d2f8060c5a9c",
  measurementId: "G-XK5TRLN1F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);