// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATDkaNewClQmzsFS3MpowUhv95wGhKDmA",
  authDomain: "neuronex-ai.firebaseapp.com",
  projectId: "neuronex-ai",
  storageBucket: "neuronex-ai.appspot.com",
  messagingSenderId: "179292359244",
  appId: "1:179292359244:web:cb19471c43826421aac2e9",
  measurementId: "G-6FVD96DP1T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
