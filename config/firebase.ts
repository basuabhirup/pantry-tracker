// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcB20Q5xumokAOoR04p6LIhXmnp7vzp4s",
  authDomain: "hs-pantry-tracker.firebaseapp.com",
  projectId: "hs-pantry-tracker",
  storageBucket: "hs-pantry-tracker.appspot.com",
  messagingSenderId: "964003729594",
  appId: "1:964003729594:web:7ccc4b496016b39596f283",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);

export default app;
