import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'
const api_key = process.env.REACT_APP_API_KEY;
const app_id = process.env.REACT_APP_APP_ID;
const message_id = process.env.REACT_APP_MESSAGE;
const measurement_id = process.env.REACT_APP_MEASUREMENT;

var firebaseConfig = {
  apiKey: api_key,
  authDomain: "carrot-db.firebaseapp.com",
  databaseURL: "https://carrot-db.firebaseio.com",
  projectId: "carrot-db",
  storageBucket: "carrot-db.appspot.com",
  messagingSenderId: message_id ,
  appId: app_id,
  measurementId: measurement_id
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
