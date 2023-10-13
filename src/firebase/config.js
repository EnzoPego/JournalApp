// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1c4QBdRqt_MfFVJDTw0w5-1XPy5yqt4s",
  authDomain: "journalapp-8cbad.firebaseapp.com",
  projectId: "journalapp-8cbad",
  storageBucket: "journalapp-8cbad.appspot.com",
  messagingSenderId: "1018134917703",
  appId: "1:1018134917703:web:a80b4f11d6510857183762"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore(  FirebaseApp )