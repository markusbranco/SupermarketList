import * as firebase from 'firebase';

//Connection with Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCvkkoMzpxFtI-GusQ-bkHAXxlEtbfoi-E",
    authDomain: "marketlistdatabase.firebaseapp.com",
    databaseURL: "https://marketlistdatabase.firebaseio.com",
    projectId: "marketlistdatabase",
    storageBucket: "marketlistdatabase.appspot.com",
    messagingSenderId: "826105787304",
    appId: "1:826105787304:web:251379c8944a632b7ea39d",
    measurementId: "G-FPR5221P5R"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;