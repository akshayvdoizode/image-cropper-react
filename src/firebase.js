// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC91XjyUzxC9k6-UuIBvKiUP0l-h1PJtTM",
  authDomain: "task3-d6a49.firebaseapp.com",
  projectId: "task3-d6a49",
  storageBucket: "task3-d6a49.appspot.com",
  messagingSenderId: "351403046222",
  appId: "1:351403046222:web:78c248b1e3d0c37d8b1a1f",
  measurementId: "G-YQC7FNJ8QF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth };

export default db;
