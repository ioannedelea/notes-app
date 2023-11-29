import { initializeApp } from "firebase/app";
import { getFirestore, collection }  from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCVRsqoF0YoLU4lad4HRzYoViy6tDsqDb8",
  authDomain: "react-notes-ec5db.firebaseapp.com",
  projectId: "react-notes-ec5db",
  storageBucket: "react-notes-ec5db.appspot.com",
  messagingSenderId: "219045239143",
  appId: "1:219045239143:web:fe931d372f78bd3a4b37c2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")