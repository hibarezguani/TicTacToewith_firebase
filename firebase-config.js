// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN83i6l_dTHE8eQc77scKwkb_aKwosf-I",
  authDomain: "tictactoeproject-1fdac.firebaseapp.com",
  projectId: "tictactoeproject-1fdac",
  storageBucket: "tictactoeproject-1fdac.appspot.com",
  messagingSenderId: "806933237444",
  appId: "1:806933237444:web:745288a0390dee805ec391",
  measurementId: "G-40CB37PK24"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export default firebase;