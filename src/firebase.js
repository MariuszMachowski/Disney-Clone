// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//     authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//     projectId: "disneyplus-clone-a33d5",
//     storageBucket: "disneyplus-clone-a33d5.appspot.com",
//     messagingSenderId: "37918794208",
//     appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//     measurementId: "G-DRVLJKWRWG",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;


// import firebase from "firebase";


// const firebaseConfig = {
//     apiKey: "AIzaSyCPBBI51LMzx0iP72IAPuEVIQ8j5TSi87w",
//     authDomain: "disneyplus-clone-5e7be.firebaseapp.com",
//     projectId: "disneyplus-clone-5e7be",
//     storageBucket: "disneyplus-clone-5e7be.appspot.com",
//     messagingSenderId: "924521348732",
//     appId: "1:924521348732:web:e3f5b0524f8d162a28d3f9",
//     measurementId: "G-PJKY9PBB05"
// };


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
// export { auth, provider, storage };
// export default db;

// Import the functions you need from the SDKs you need
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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