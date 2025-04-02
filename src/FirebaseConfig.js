
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACMDk2M7oZmhDmWFHnNDIOWPgdZppWPlI",
  authDomain: "react-exam-444c6.firebaseapp.com",
  projectId: "react-exam-444c6",
  storageBucket: "react-exam-444c6.firebasestorage.app",
  messagingSenderId: "174016562827",
  appId: "1:174016562827:web:683cf04b24976aec22b68e",
  measurementId: "G-L84YTWCBP8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
