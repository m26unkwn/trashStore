import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "etataay hggngndgngn",
  authDomain: "trjrjdrjdjdtjd",
  projectId: "photogallery-348d8",
  storageBucket: "pjdjtdrjdr",
  messagingSenderId: "jdjtdrjrjrdtj",
  appId: ":tjdrjdrrjdrj",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const fireStore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, fireStore, timestamp };
