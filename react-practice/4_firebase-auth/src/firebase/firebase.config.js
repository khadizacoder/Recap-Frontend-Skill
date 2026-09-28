// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Qekd1v15YZHH5xWIrQMojHiFzJy4Jzk",
  authDomain: "testing-auth-a716c.firebaseapp.com",
  projectId: "testing-auth-a716c",
  storageBucket: "testing-auth-a716c.firebasestorage.app",
  messagingSenderId: "371965320663",
  appId: "1:371965320663:web:2a79706478df4c68dc7f92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);