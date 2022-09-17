// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfTwkss57NjjpjHfqU9xl7T8IWOYtcMs8",
  authDomain: "chat-app-56d8f.firebaseapp.com",
  projectId: "chat-app-56d8f",
  storageBucket: "chat-app-56d8f.appspot.com",
  messagingSenderId: "509858596043",
  appId: "1:509858596043:web:11e55aef45e7be66dc874e",
  measurementId: "G-DHPQ870ZNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)