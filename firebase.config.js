// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkCmdUkwDeOCMkqkPXnEXpEgoBxeWeja4",
  authDomain: "rgfclient.firebaseapp.com",
  projectId: "rgfclient",
  storageBucket: "rgfclient.appspot.com",
  messagingSenderId: "227726377188",
  appId: "1:227726377188:web:3bce516168e1989cc06cf1",
  measurementId: "G-XF0J81MD7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;