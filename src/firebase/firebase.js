import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7a5-dVQSz9TxtC17ci1AniUqxTXdA_JU",
  authDomain: "auth-33ee2.firebaseapp.com",
  projectId: "auth-33ee2",
  storageBucket: "auth-33ee2.firebasestorage.app",
  messagingSenderId: "463543751794",
  appId: "1:463543751794:web:07fb54457147a7686e9eeb",
  measurementId: "G-K6XP9K7ZTM"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app)

export{app, auth};