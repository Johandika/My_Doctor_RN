// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDFWGHlB9lQRcQzIpjoHZuLmaZ76o3AEcE',
  authDomain: 'my-doctor-38dc7.firebaseapp.com',
  projectId: 'my-doctor-38dc7',
  storageBucket: 'my-doctor-38dc7.appspot.com',
  messagingSenderId: '470044936144',
  appId: '1:470044936144:web:97e5a16b39254f95be5bd5',
  databaseURL:
    'https://my-doctor-38dc7-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const Firebase = initializeApp(firebaseConfig);
const auth = getAuth(Firebase);
const database = getDatabase(Firebase);

export {auth, Firebase, database};
