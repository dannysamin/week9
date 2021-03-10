const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBO4pnLujyVmq6_zyKU_ubIPxoM9lyJ5k0",
    authDomain: "kiei-451-c6fe7.firebaseapp.com",
    projectId: "kiei-451-c6fe7",
    storageBucket: "kiei-451-c6fe7.appspot.com",
    messagingSenderId: "1013406781477",
    appId: "1:1013406781477:web:dbc827552141fa71ffefcc"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase