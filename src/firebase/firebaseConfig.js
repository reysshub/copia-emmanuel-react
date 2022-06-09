// Importamos la funcion que inicializa firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//     apiKey: "AIzaSyA1OnkaN89b9L-Ej-L_jyAJne_pXRaze8M",
//     authDomain: "campkulaqua-base.firebaseapp.com",
//     projectId: "campkulaqua-base",
//     storageBucket: "campkulaqua-base.appspot.com",
//     messagingSenderId: "136330785473",
//     appId: "1:136330785473:web:424a02c90c121381b41a40"
//   };

// Objeto de configuracion
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;