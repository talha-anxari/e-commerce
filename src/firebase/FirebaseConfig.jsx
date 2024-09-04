import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMw-To4og_TnAY1ps4uUJLkcoqYWEZwPM",
  authDomain: "fir-auth-6c596.firebaseapp.com",
  projectId: "fir-auth-6c596",
  storageBucket: "fir-auth-6c596.appspot.com",
  messagingSenderId: "772759599460",
  appId: "1:772759599460:web:e0cd76d885615a702c2271"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}