/*FIREBASE CONFIG*/
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFZkh-PYJFB6bvPzwyV-9SuKe6_HfJKog",
  authDomain: "petcanvas-94d74.firebaseapp.com",
  databaseURL: "https://petcanvas-94d74.firebaseio.com",
  projectId: "petcanvas-94d74",
  storageBucket: "petcanvas-94d74.appspot.com",
  messagingSenderId: "325789857084",
  appId: "1:325789857084:web:66e9c19ce2398236d29a39",
};

firebase.initializeApp(firebaseConfig);

export default firebase;