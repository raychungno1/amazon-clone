import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCTdcp8h3ZNAoTAuOJpgKu1Bx6VWOmjrjk",
  authDomain: "clone-5a6d3.firebaseapp.com",
  projectId: "clone-5a6d3",
  storageBucket: "clone-5a6d3.appspot.com",
  messagingSenderId: "261809079758",
  appId: "1:261809079758:web:11dd77046db2016bf5d79f",
  measurementId: "G-2GFK7SD2K3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
