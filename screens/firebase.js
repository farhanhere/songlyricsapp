// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfw9yvll8zv3Y2VdUafucZZklzk5C2A0Y",
  authDomain: "songlyrics-76319.firebaseapp.com",
  projectId: "songlyrics-76319",
  storageBucket: "songlyrics-76319.appspot.com",
  messagingSenderId: "1014995013204",
  appId: "1:1014995013204:web:c264be474576f510afe7c1",
  measurementId: "G-VHJCMLGQ7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics = getAnalytics(app);
export {app, auth};