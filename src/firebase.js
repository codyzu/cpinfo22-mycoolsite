// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYMPKHsHu65K1TUd9DhhlAZ-_dP1kLhx4",
  authDomain: "cpinfo22-mycoolsite.firebaseapp.com",
  projectId: "cpinfo22-mycoolsite",
  storageBucket: "cpinfo22-mycoolsite.appspot.com",
  messagingSenderId: "426111878373",
  appId: "1:426111878373:web:8b1c7d917a17b7168d000c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;