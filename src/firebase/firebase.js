import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  
  // Firebase init - project configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBsgTKyKQ6C86ijJeSxcgY_2gMFbQkBfuI",
    authDomain: "leek-calendar.firebaseapp.com",
    databaseURL: "https://leek-calendar.firebaseio.com",
    projectId: "leek-calendar",
    storageBucket: "leek-calendar.appspot.com",
    messagingSenderId: "369234813359",
    appId: "1:369234813359:web:ca969e35ee8677d8780f5a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Utils
const db = firebase.firestore()
const auth = firebase.auth()

// Collection references
const usersCollection = db.collection('users')
//const userCalendar = db.collection('users').doc(user.displayName).collection('calendar')

export {
    db,
    auth,
    usersCollection,
    //userCalendar
}