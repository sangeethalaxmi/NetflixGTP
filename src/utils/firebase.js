// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtwYjWLhQi9P7EdhdJCYZSRBxBzeDGEds",
  authDomain: "netflixgpt-631a9.firebaseapp.com",
  projectId: "netflixgpt-631a9",
  storageBucket: "netflixgpt-631a9.firebasestorage.app",
  messagingSenderId: "809530919904",
  appId: "1:809530919904:web:eb1acca90a184684903985",
  measurementId: "G-7ESNDCB4CT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
