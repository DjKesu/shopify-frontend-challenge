// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-SHt9a4ipgTh_2MBPR3xcqFCy9fdNOjk",
  authDomain: "shopify-frontend-challen-8c850.firebaseapp.com",
  projectId: "shopify-frontend-challen-8c850",
  storageBucket: "shopify-frontend-challen-8c850.appspot.com",
  messagingSenderId: "731267104310",
  appId: "1:731267104310:web:98de381799e3d6199be297",
  measurementId: "G-5BMFNHKP6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);