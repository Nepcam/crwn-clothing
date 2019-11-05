import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAZxK3ObCRulQcfiT_Zb2m97HkarSCiQIU",
  authDomain: "crwn-db-90bda.firebaseapp.com",
  databaseURL: "https://crwn-db-90bda.firebaseio.com",
  projectId: "crwn-db-90bda",
  storageBucket: "crwn-db-90bda.appspot.com",
  messagingSenderId: "617025428767",
  appId: "1:617025428767:web:cc35823635bd57cb39e42a",
  measurementId: "G-2PT9BYYJ9T"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;