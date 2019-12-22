import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCz21wYhCGHWB9ji1RnvhaPDI0eR87y8f8",
    authDomain: "belajar-firebase-13180.firebaseapp.com",
    databaseURL: "https://belajar-firebase-13180.firebaseio.com",
    projectId: "belajar-firebase-13180",
    storageBucket: "belajar-firebase-13180.appspot.com",
    messagingSenderId: "129150704824",
    appId: "1:129150704824:web:9587cc8e1bd5ddc842284d",
    measurementId: "G-BSBTYVDYXH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase