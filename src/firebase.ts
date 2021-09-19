import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyARGAuh8ocoVW0ovL9dAIdDi7-rY8YeHiI",
  authDomain: "linkedin-clone-b1a99.firebaseapp.com",
  projectId: "linkedin-clone-b1a99",
  storageBucket: "linkedin-clone-b1a99.appspot.com",
  messagingSenderId: "127247186687",
  appId: "1:127247186687:web:7046323eb27c0bd7a52aca",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, db };
