import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'
 
var firebaseConfig = {
  apiKey: "AIzaSyBTLA8KL6rAJzjHpk8Hr2d4Qb5AItE8Mbo",
  authDomain: "carrot-db.firebaseapp.com",
  databaseURL: "https://carrot-db.firebaseio.com",
  projectId: "carrot-db",
  storageBucket: "carrot-db.appspot.com",
  messagingSenderId: "3868883997",
  appId: "1:3868883997:web:90f2182a41adcd4ed15af4",
  measurementId: "G-F3TGBG0W8D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
