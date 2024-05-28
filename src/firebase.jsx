import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "shop-91d46.firebaseapp.com",
  projectId: "shop-91d46",
  storageBucket: "shop-91d46.appspot.com",
  messagingSenderId: "355944258190",
  appId: "1:355944258190:web:bb4e188d06151e746187df",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
