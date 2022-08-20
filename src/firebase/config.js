import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNyRjqvrgRd9wHg7G_AyIDXDWru6g0lcc",
    authDomain: "dtm-clone.firebaseapp.com",
    projectId: "dtm-clone",
    storageBucket: "dtm-clone.appspot.com",
    messagingSenderId: "839140297652",
    appId: "1:839140297652:web:b7016c31bdd0c5568340e1",
    measurementId: "G-260QM95FM9"
  };

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
  
  export default firebase;