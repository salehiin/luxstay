// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjy2X9wr7ArSKIXjXIogEbK9mT-K2GQGc",
  authDomain: "anine-luxstay.firebaseapp.com",
  projectId: "anine-luxstay",
  storageBucket: "anine-luxstay.appspot.com",
  messagingSenderId: "365878987315",
  appId: "1:365878987315:web:4cf1d048355e9887b87146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;