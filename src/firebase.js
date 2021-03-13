import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi_koCmXAnlmIY9k1xZ3RNQN_mKai1HlY",
  authDomain: "clone-8cea8.firebaseapp.com",
  projectId: "clone-8cea8",
  storageBucket: "clone-8cea8.appspot.com",
  messagingSenderId: "450938872840",
  appId: "1:450938872840:web:188a47d04c2b4e0f675dbd",
  measurementId: "G-5VR03FYZYJ"
};
const firebaseApp =  firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};
