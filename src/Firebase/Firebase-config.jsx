// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB-OGQALgnOIMtXQLZ27OcnSDHGuSuJbY",
  authDomain: "fir-auth-7b78b.firebaseapp.com",
  projectId: "fir-auth-7b78b",
  storageBucket: "fir-auth-7b78b.appspot.com",
  messagingSenderId: "938447295118",
  appId: "1:938447295118:web:38d37f24e75a37d119afdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
