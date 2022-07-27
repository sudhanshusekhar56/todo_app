import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAy-vjX3kpBsKQZtVGwTCt1PkUVtORG95Y",
    authDomain: "todo-app-cp-8ba5c.firebaseapp.com",
    projectId: "todo-app-cp-8ba5c",
    storageBucket: "todo-app-cp-8ba5c.appspot.com",
    messagingSenderId: "605922443361",
    appId: "1:605922443361:web:e0dccddf3a0c2023e0ea20",
    measurementId: "G-HJ776HPXSJ"
});

const db = firebaseApp.firestore();

export default db;