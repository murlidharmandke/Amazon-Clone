import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzS5BI02LmWQt34kEbAs0S_3gtMs2cnWY",
    authDomain: "fir-8a149.firebaseapp.com",
    projectId: "fir-8a149",
    storageBucket: "fir-8a149.appspot.com",
    messagingSenderId: "480294003974",
    appId: "1:480294003974:web:c734bf0536372db60a6a87",
    measurementId: "G-S1FL1G1YH7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth};