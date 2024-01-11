// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3MjdFw0_5bDzKCvTvGWc-RbAXyn90wYc",
  authDomain: "submentor-c89ce.firebaseapp.com",
  projectId: "submentor-c89ce",
  storageBucket: "submentor-c89ce.appspot.com",
  messagingSenderId: "501306549724",
  appId: "1:501306549724:web:97b537d31e8b378d041b19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Database
export const db = getFirestore(app);
// Auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});