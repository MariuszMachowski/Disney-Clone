

import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCPBBI51LMzx0iP72IAPuEVIQ8j5TSi87w",
    authDomain: "disneyplus-clone-5e7be.firebaseapp.com",
    projectId: "disneyplus-clone-5e7be",
    storageBucket: "disneyplus-clone-5e7be.appspot.com",
    messagingSenderId: "924521348732",
    appId: "1:924521348732:web:e3f5b0524f8d162a28d3f9",
    measurementId: "G-PJKY9PBB05"
};

// Initialize Firebase


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;