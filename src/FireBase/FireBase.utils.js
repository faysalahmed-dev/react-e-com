import firebase from 'firebase/app'; // fire base app lib
import 'firebase/auth';
import 'firebase/firestore';
// confing the firebase
const config = {
  apiKey: 'AIzaSyDsGkwQ3vIV4DahyLFwn2JT-Fg4mKCe29Y',
  authDomain: 'react-e-com.firebaseapp.com',
  databaseURL: 'https://react-e-com.firebaseio.com',
  projectId: 'react-e-com',
  storageBucket: 'react-e-com.appspot.com',
  messagingSenderId: '49949147436',
  appId: '1:49949147436:web:722d667b6cb2f56b25ac89',
  measurementId: 'G-S4PQ0XQNC1'
};
// initalize the firebase app
firebase.initializeApp(config);
// function we need
/*
     in this case 
          auth
          firestore
*/
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// add data to firenbase
export const addToFirebase = async (collection, data) => {
  const collectionRef = await firestore.collection(collection);
  const batch = firestore.batch();
  data.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return batch.commit();
};

// sing in with google provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();
// ser custom parameters
googleProvider.setCustomParameters({ login_hint: 'seleted_account' });
// facebookProvider.setCustomParameters({ display: 'popup' });

// google sing in popup
export const singInWithGoogle = () => auth.signInWithPopup(googleProvider);
// export const singInWithFacebook = () =>
//     auth.signInWithPopup(facebookProvider)

export const transformDataFromSnapshot = collections => {
  const collecitonDoc = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    };
  });
  return collecitonDoc.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export default firebase;
