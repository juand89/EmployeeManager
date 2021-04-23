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
export default firebase
