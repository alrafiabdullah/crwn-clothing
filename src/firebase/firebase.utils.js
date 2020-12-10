import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

let config = {
  apiKey: "AIzaSyBGrkuYvMk3g7LddrRQ5sipAX6HzzDEv2w",
  authDomain: "crwn-db-af749.firebaseapp.com",
  projectId: "crwn-db-af749",
  storageBucket: "crwn-db-af749.appspot.com",
  messagingSenderId: "247030400281",
  appId: "1:247030400281:web:f2d853fec6ed92ec7f7188",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
