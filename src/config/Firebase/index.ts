// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

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
};

const Firebase = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(Firebase);

export {FirebaseAuth};
