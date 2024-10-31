// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnKUItOFljbOQL_cNValVDu37dxACqeMk",
  authDomain: "naruto-33e65.firebaseapp.com",
  projectId: "naruto-33e65",
  storageBucket: "naruto-33e65.firebasestorage.app",
  messagingSenderId: "625504479517",
  appId: "1:625504479517:web:7733415d3e6b08c7e1d9f4"
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };