// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy9cG1wsURhC66Q7Y1oNaZcPCoqVGAhKg",
  authDomain: "insta-eee41.firebaseapp.com",
  projectId: "insta-eee41",
  storageBucket: "insta-eee41.appspot.com",
  messagingSenderId: "147304979332",
  appId: "1:147304979332:web:c2cbbae00dac404c2bdbd1"
};

// Initialize Firebase
const app=!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db=getFirestore();
const storage=getStorage();
// const app = initializeApp(firebaseConfig);
export {app,db,storage};