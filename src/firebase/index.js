import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8u7gohmQZvcE-MuiiPjIKy-Q1J05Uq7o",
  authDomain: "coffee-shop-9e685.firebaseapp.com",
  projectId: "coffee-shop-9e685",
  storageBucket: "coffee-shop-9e685.appspot.com",
  messagingSenderId: "47499366364",
  appId: "1:47499366364:web:a4ba68d98a0a33183bc919"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);

// apiKey: process.env.REACT_APP_API_KEY ,
// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_PROJECT_ID,
// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_APP_ID