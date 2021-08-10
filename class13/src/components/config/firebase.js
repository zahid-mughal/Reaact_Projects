import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDqNLVvWy7FtywjxBPgWJCyRmBmSwJeCpU",
    authDomain: "class13-test2.firebaseapp.com",
    projectId: "class13-test2",
    storageBucket: "class13-test2.appspot.com",
    messagingSenderId: "249618262624",
    appId: "1:249618262624:web:de344e1b9cf5e5fd8b3105",
    measurementId: "G-889S1TE8QB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();