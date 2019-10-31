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

// sing in with google provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
// ser custom parameters
googleProvider.setCustomParameters({ login_hint: 'seleted_account' });
facebookProvider.setCustomParameters({ display: 'popup' });

// google sing in popup
export const singInWithGoogle = () => auth.signInWithPopup(googleProvider);
// export const singInWithFacebook = () =>
//     auth.signInWithPopup(facebookProvider)

export default firebase;
