import firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/firestore';




// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD4T3F3BWkBtaQkN0UGhjUMtOuXSgg29Ko",
    authDomain: "firegram-16acd.firebaseapp.com",
    projectId: "firegram-16acd",
    storageBucket: "firegram-16acd.appspot.com",
    messagingSenderId: "973337517757",
    appId: "1:973337517757:web:4f7bbf4fee075d11a921d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };