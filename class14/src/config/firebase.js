import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDLxAfo2ymoz6xcFEhZWTc_mUN5kmH-t7Q",
    authDomain: "class14-c50aa.firebaseapp.com",
    projectId: "class14-c50aa",
    storageBucket: "class14-c50aa.appspot.com",
    messagingSenderId: "687105345639",
    appId: "1:687105345639:web:eb04d95f524a142839ecc2",
    measurementId: "G-6QRYRBYXND"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();