// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
 
const firebaseConfig = {
  apiKey: "AIzaSyCFB4S5x0SjxrOBq6pcBnWlUSNp6zNG2E8",
  authDomain: "bankevihareero.firebaseapp.com",
  projectId: "bankevihareero",
  storageBucket: "bankevihareero.appspot.com",
  messagingSenderId: "971847601996",
  appId: "1:971847601996:web:d9d2c49187d1d8bef809e9",
  measurementId: "G-SZLBWCDM3G"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app , auth};
