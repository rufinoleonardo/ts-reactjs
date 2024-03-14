import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr5n9d1r5qv8GuIQdZl_WnocHm4fLcvZI",
  authDomain: "web-carros-b60a2.firebaseapp.com",
  projectId: "web-carros-b60a2",
  storageBucket: "web-carros-b60a2.appspot.com",
  messagingSenderId: "383887507429",
  appId: "1:383887507429:web:3f1b846c8b2f972149390c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
