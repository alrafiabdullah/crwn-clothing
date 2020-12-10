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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      return userRef;
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
