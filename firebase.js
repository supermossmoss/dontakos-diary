// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBcwNyGRk69GCAoo4hr8h5fwmeB-dYqs7s',
  authDomain: 'dontakos-diary.firebaseapp.com',
  projectId: 'dontakos-diary',
  storageBucket: 'dontakos-diary.appspot.com',
  messagingSenderId: '812404960493',
  appId: '1:812404960493:web:d66995514835f9744ff0e4',
  measurementId: 'G-TKVDKFGNPQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

///ブラウザのみで動作させる
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}
