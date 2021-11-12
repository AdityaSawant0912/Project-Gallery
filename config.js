// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqK2JXdiDPAifviccUEp4YNt75c2Q6BR0",
  authDomain: "sakec-1ad7b.firebaseapp.com",
  projectId: "sakec-1ad7b",
  storageBucket: "sakec-1ad7b.appspot.com",
  messagingSenderId: "875794722337",
  appId: "1:875794722337:web:9795bf9a92c5fb5d89fd60",
  measurementId: "G-DGYPVSZE2Y"
};
 
const app = initializeApp(firebaseConfig);
module.exports = app;