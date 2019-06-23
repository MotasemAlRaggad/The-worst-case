import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQRWYLt04YCaYacMzSrHByVUbT4X0EJgI",
    authDomain: "the-worst-case.firebaseapp.com",
    databaseURL: "https://the-worst-case.firebaseio.com",
    projectId: "the-worst-case",
    storageBucket: "the-worst-case.appspot.com",
    messagingSenderId: "277488841266",
    appId: "1:277488841266:web:b218c8784345d343"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const storage = firebase.storage();

  export {
    storage,firebase as default
  }
  