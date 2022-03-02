import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;


