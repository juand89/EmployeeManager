import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Get a Firestore instance
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyDjEnYd_BhEzhJeK5hokQnr9XfebbqQ9nA',
    authDomain: 'employees-913bf.firebaseapp.com',
    projectId: 'employees-913bf',
    storageBucket: 'employees-913bf.appspot.com',
    messagingSenderId: '798605891433',
    appId: '1:798605891433:web:0c5d57b415a451f4258ff8',
  })
}
firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}
// utils
const db = firebase.firestore()
const auth = firebase.auth()
// collection references
const employeesCollection = db.collection('employees')
const firestoreTime = firebase.firestore.FieldValue.serverTimestamp()
export {
  db, auth, employeesCollection, firebase, firestoreTime
}
