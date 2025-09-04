// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgRPqOXY7if5i81B2cn48oTLhxpq_1OAw",
  authDomain: "portfolio-f1320.firebaseapp.com",
  projectId: "portfolio-f1320",
  storageBucket: "portfolio-f1320.firebasestorage.app",
  messagingSenderId: "882743482428",
  appId: "1:882743482428:web:b6f0732ddf67da02868b39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;