// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9rZa195RPsamJYQSVfhRmVQSomTX1afo",
  authDomain: "react-dragon-3781c.firebaseapp.com",
  projectId: "react-dragon-3781c",
  storageBucket: "react-dragon-3781c.firebasestorage.app",
  messagingSenderId: "615647864053",
  appId: "1:615647864053:web:c6937e4b69b9c237cb51bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);