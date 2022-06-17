// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOhwcLE5BzJ5aOsOUKYo5xc_iPDAWVUBQ",
    authDomain: "awetech-movies.firebaseapp.com",
    projectId: "awetech-movies",
    storageBucket: "awetech-movies.appspot.com",
    messagingSenderId: "509327305141",
    appId: "1:509327305141:web:4bf5a0e81119c4938411fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)