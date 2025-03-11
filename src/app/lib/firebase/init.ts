// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "yt-vipcode-nextjs.firebaseapp.com",
  projectId: "yt-vipcode-nextjs",
  storageBucket: "yt-vipcode-nextjs.appspot.com",
  messagingSenderId: "1074434957523",
  appId: "1:1074434957523:web:f9b33cad4cdb030d1b3426",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
