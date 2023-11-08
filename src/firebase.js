// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6zWWiaxbBkWshJGhAHIo9Sm1wA8ntPKQ",
  authDomain: "chat-33c4a.firebaseapp.com",
  projectId: "chat-33c4a",
  storageBucket: "chat-33c4a.appspot.com",
  messagingSenderId: "535434431215",
  appId: "1:535434431215:web:40b1ced2d08a964ce5691a",
  measurementId: "G-3924K3QPJV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
