// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7wI8YzOHpvUwDQrPzkJjg2xlFjQGpAbM",
  authDomain: "testing-project2-d1d3d.firebaseapp.com",
  projectId: "testing-project2-d1d3d",
  storageBucket: "testing-project2-d1d3d.firebasestorage.app",
  messagingSenderId: "79601791246",
  appId: "1:79601791246:web:519c8da7cd1c6ab99ae75f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);