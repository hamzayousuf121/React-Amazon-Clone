
import firebase from 'firebase/app';
import  'firebase/auth';
import  'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCl6FdUKNO3_Qc0hMc4ibZXwAiLnDZn_D8",
    authDomain: "amzonclone.firebaseapp.com",
    databaseURL: "https://amzonclone.firebaseio.com",
    projectId: "amzonclone",
    storageBucket: "amzonclone.appspot.com",
    messagingSenderId: "916932939362",
    appId: "1:916932939362:web:a8d7f0ccfb8b6118778b3b",
    measurementId: "G-QLMKR2SQWL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };