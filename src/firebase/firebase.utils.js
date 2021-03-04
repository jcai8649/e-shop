import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDss0AMTjrjeFaW-D4qwizPfduE6SEQPZA",
  authDomain: "e-shopdb-f52a1.firebaseapp.com",
  projectId: "e-shopdb-f52a1",
  storageBucket: "e-shopdb-f52a1.appspot.com",
  messagingSenderId: "20109182470",
  appId: "1:20109182470:web:2f47d828d18c487ab12587",
  measurementId: "G-DPYMXY0V97",
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
    } catch (error) {
      console.log("error creating user", error.message);
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