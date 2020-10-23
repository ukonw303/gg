import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyC0_31DKPF-Ue3YQVVHaKojPWvMKv6GPIk',
    authDomain: 'ggna-39be9.firebaseapp.com',
    databaseURL: 'https://ggna-39be9.firebaseio.com',
    projectId: 'ggna-39be9',
    storageBucket: 'ggna-39be9.appspot.com',
    messagingSenderId: '77096967361',
    appId: '1:77096967361:web:b2d2c270918b2c759d0840',
    measurementId: 'G-CH4QPCMJNY',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
