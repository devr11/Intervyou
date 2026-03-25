
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervyou-7b367.firebaseapp.com",
  projectId: "intervyou-7b367",
  storageBucket: "intervyou-7b367.firebasestorage.app",
  messagingSenderId: "730776476247",
  appId: "1:730776476247:web:59d946e8c30aedaabce112"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}