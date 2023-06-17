import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyF_s_6IbguONZtQtGzJNQ862TXFMjWu8",
  authDomain: "miniblog-b2931.firebaseapp.com",
  projectId: "miniblog-b2931",
  storageBucket: "miniblog-b2931.appspot.com",
  messagingSenderId: "975071969419",
  appId: "1:975071969419:web:de377ac24228ea160a948e",
  measurementId: "G-7CE6V0CGM7"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// const db = getFirestore(app)

export default firebase;