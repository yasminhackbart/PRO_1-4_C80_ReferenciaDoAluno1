import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDKsBvE1fSCPfG8CwxAnVkuyY2zkTXcNUw",
  authDomain: "bibliotecaeletronica-5f78b.firebaseapp.com",
  projectId: "bibliotecaeletronica-5f78b",
  storageBucket: "bibliotecaeletronica-5f78b.appspot.com",
  messagingSenderId: "194185416510",
  appId: "1:194185416510:web:5ac2215b8b8f048a23266f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
