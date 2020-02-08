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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  // const collectionRef = firestore.collection('users');

  const snapShot = await userRef.get();
  // const collectionSnapshot = await collectionRef.get();
  // console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) });  // good to check out data in firebase

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  } 

  return userRef;
} 

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  console.log(transformedCollection);
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;