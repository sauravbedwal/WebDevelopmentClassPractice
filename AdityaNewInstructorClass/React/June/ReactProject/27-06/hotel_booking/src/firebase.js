// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBR0Ab_ug46pt3hB-4OLDe-k5u5uc35J2U",
    authDomain: "bookstay-65b15.firebaseapp.com",
    projectId: "bookstay-65b15",
    storageBucket: "bookstay-65b15.appspot.com",
    messagingSenderId: "143282096932",
    appId: "1:143282096932:web:03605ddb6589373f1cc1b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };