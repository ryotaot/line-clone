import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyApDO0Qh5OW4rDqDXVnWzgnkNn2pFaoM5Q",
  authDomain: "line-clone-c26c8.firebaseapp.com",
  projectId: "line-clone-c26c8",
  storageBucket: "line-clone-c26c8.firebasestorage.app",
  messagingSenderId: "1083852004958",
  appId: "1:1083852004958:web:1c423acfc4ff46644cdecf",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
