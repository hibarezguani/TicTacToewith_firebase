import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAN83i6l_dTHE8eQc77scKwkb_aKwosf-I",
    authDomain: "tictactoeproject-1fdac.firebaseapp.com",
    projectId: "tictactoeproject-1fdac",
    storageBucket: "tictactoeproject-1fdac.appspot.com",
    messagingSenderId: "806933237444",
    appId: "1:806933237444:web:745288a0390dee805ec391",
    measurementId: "G-40CB37PK24"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };