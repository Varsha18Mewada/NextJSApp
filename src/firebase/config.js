// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSQXKYB4rQ2PAlyC9YLbEaiB5OzcBmCxU",
  authDomain: "nextjsauth-8dc31.firebaseapp.com",
  projectId: "nextjsauth-8dc31",
  storageBucket: "nextjsauth-8dc31.firebasestorage.app",
  messagingSenderId: "861473068130",
  appId: "1:861473068130:web:5d08ed8c17b8fa9066ad3b",
  measurementId: "G-P56Y5R53S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth}