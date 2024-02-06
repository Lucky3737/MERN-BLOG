// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2f50b.firebaseapp.com",
  projectId: "mern-blog-2f50b",
  storageBucket: "mern-blog-2f50b.appspot.com",
  messagingSenderId: "896456008095",
  appId: "1:896456008095:web:6ffc92ed2adc0837a49daa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
