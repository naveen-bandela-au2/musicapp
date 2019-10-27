import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCpoRQJY7ASuVvAClzmOwZCamNe306ZtFM",
    authDomain: "navinmusic-f4806.firebaseapp.com",
    databaseURL: "https://navinmusic-f4806.firebaseio.com",
    projectId: "navinmusic-f4806",
    storageBucket: "navinmusic-f4806.appspot.com",
    messagingSenderId: "561615167359",
    appId: "1:561615167359:web:1c32e995e8700fc6a2444a"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
