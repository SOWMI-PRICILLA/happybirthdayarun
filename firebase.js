// firebase.js
// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace this with your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyDA-w4k2WzIbedNIndS9brQA-DSto8_ciU",
  authDomain: "happy-birthday-arun.firebaseapp.com",
  projectId: "happy-birthday-arun",
  storageBucket: "happy-birthday-arun.firebasestorage.app",
  messagingSenderId: "69926817966",
  appId: "1:69926817966:web:3202fd277d3785b60e1d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth if you need login
const auth = getAuth(app);
export { auth };
