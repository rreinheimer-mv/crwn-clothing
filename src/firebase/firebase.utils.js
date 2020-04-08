import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFLe_cGDtBprdOvaCMQnLticWIzJPRgxA",
    authDomain: "crwn-db-e8e9a.firebaseapp.com",
    databaseURL: "https://crwn-db-e8e9a.firebaseio.com",
    projectId: "crwn-db-e8e9a",
    storageBucket: "crwn-db-e8e9a.appspot.com",
    messagingSenderId: "890781783826",
    appId: "1:890781783826:web:ed9ebfff0bc385c62a45cb",
    measurementId: "G-QBNW54P6LW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provier = new firebase.auth.GoogleAuthProvider();
  provier.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provier);

  export default firebase;