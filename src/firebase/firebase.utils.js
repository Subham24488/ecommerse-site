import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDHTBi-AG20QIVtslFWYItelG8Ox_FbDLg",
  authDomain: "ecommerse-website.firebaseapp.com",
  databaseURL: "https://ecommerse-website.firebaseio.com",
  projectId: "ecommerse-website",
  storageBucket: "ecommerse-website.appspot.com",
  messagingSenderId: "377876023028",
  appId: "1:377876023028:web:dca3b5d31cda2870d8c0a1",
  measurementId: "G-NJKT8LZT4T",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
