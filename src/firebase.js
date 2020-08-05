import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCv_c2xMw_nglq2jAJT0nfBfv0PhAVGrnI",
  authDomain: "notstagram-4d20e.firebaseapp.com",
  databaseURL: "https://notstagram-4d20e.firebaseio.com",
  projectId: "notstagram-4d20e",
  storageBucket: "notstagram-4d20e.appspot.com",
  messagingSenderId: "295475244909",
  appId: "1:295475244909:web:200e0fe93cb30f62d13464",
  measurementId: "G-JC8ZQD54TG",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
