import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBDqNrXUE7sD36n8993kf30-CijNBhsqrw",
  authDomain: "photogallery-348d8.firebaseapp.com",
  projectId: "photogallery-348d8",
  storageBucket: "photogallery-348d8.appspot.com",
  messagingSenderId: "820646503510",
  appId: "1:820646503510:web:82fb967df3fadf81c487f7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const fireStore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, fireStore, timestamp };
