// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";

import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnOifF0Vff0rfIi_5fdy9rDSxHYlBVA9M",
  authDomain: "aiwiseprep.firebaseapp.com",
  projectId: "aiwiseprep",
  storageBucket: "aiwiseprep.firebasestorage.app",
  messagingSenderId: "771001165674",
  appId: "1:771001165674:web:0084db605a55b9f435a713",
  measurementId: "G-84XF4W0Q5T",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
