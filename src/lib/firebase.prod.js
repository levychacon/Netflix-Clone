import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config= {
    apiKey: "AIzaSyC37i6hvtMesKI6hhmI8h13Sz4c9Gx0zBA",
    authDomain: "netflix-clone-dc59f.firebaseapp.com",
    projectId: "netflix-clone-dc59f",
    storageBucket: "netflix-clone-dc59f.appspot.com",
    messagingSenderId: "1071597832477",
    appId: "1:1071597832477:web:5e0f75fb28f04dab5ff9f4"
}

const firebase = Firebase.initializeApp(config)



export {firebase}