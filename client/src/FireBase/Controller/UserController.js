import firebase from 'firebase/app';
import 'firebase/firestore';

const fireStore = firebase.firestore();

export const createDocument = async (userAuth, data) => {
    if (!userAuth) return;
    // find the document
    const userRef = await fireStore.doc(`user/${userAuth.uid}`);
    // get user info
    const user = await userRef.get();
    // check user is exists
    // if user is not exists create new user else return the user
    if (!user.exists) {
        const { displayName: name, email } = userAuth;
        const created_At = new Date();
        try {
            await userRef.set({
                name,
                email,
                created_At,
                ...data
            });
        } catch (err) {
            console.log('some thing went wrong', err.message);
        }
    }
    return userRef;
};
export const getUserData = (userRef, callBack) => {
    userRef.onSnapshot(async snapShoot => {
        const userData = {
            id: snapShoot.id,
            ...snapShoot.data()
        };
        callBack(userData);
    });
};
