import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBFAtS6tRxzV3NFP40YT_K0FDlj3kKelFw",
  authDomain: "twitter-clone-3cd33.firebaseapp.com",
  projectId: "twitter-clone-3cd33",
  storageBucket: "twitter-clone-3cd33.appspot.com",
  messagingSenderId: "399827192771",
  appId: "1:399827192771:web:1085b629f9fcf94a330b76",
  measurementId: "G-R4W1EWMGE9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
