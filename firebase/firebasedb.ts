// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string;
export const AUTH_DOMAIN = process.env
  .NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN as string;
export const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string;
export const STORAGE_BUCKET = process.env
  .NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string;
export const MESSAGING_SENDER_ID = process.env
  .NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string;
export const APP_ID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID as string;
export const MEASUREMENT_ID = process.env
  .NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID as string;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { db };
