import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAa_jw69HGGwoXPyug5FBQZo3AKa2kU5c0",
        authDomain: "messenger-55032.firebaseapp.com",
        projectId: "messenger-55032",
        storageBucket: "messenger-55032.appspot.com",
        messagingSenderId: "704309407481",
        appId: "1:704309407481:web:57f1b9d674fcfcae4a3c28",
        measurementId: "G-P4VDCWYGGZ"

    }
);

const db = firebaseApp.firestore();
export default db;