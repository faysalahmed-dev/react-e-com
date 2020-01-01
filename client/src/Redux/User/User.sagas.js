import { takeLatest, put, call, all } from 'redux-saga/effects';

import actionTypes from './User.actionTypes';

import {
    auth,
    googleProvider,
    checkUserAuth
} from '../../FireBase/FireBase.utils';
import { createDocument } from '../../FireBase/Controller/UserController';
import UserAction from './User.actions';

function* getSnapsortFromUserAuth(user, otherData) {
    const userRef = yield call(createDocument, user, otherData);
    const userSnapsort = yield userRef.get();
    yield put(
        UserAction.singinSuccess({
            id: userSnapsort.id,
            ...userSnapsort.data()
        })
    );
}

function* singinWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield call(getSnapsortFromUserAuth, user);
    } catch (error) {
        yield put(UserAction.singinFail(error));
    }
}

function* singinWithEmailAndPassword({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield call(getSnapsortFromUserAuth, user);
    } catch (error) {
        yield put(UserAction.singinFail(error));
    }
}

function* isUserIsAuth() {
    try {
        const user = yield checkUserAuth();
        if (!user) return;
        yield getSnapsortFromUserAuth(user);
    } catch (err) {
        yield put(UserAction.singinFail(err));
    }
}

function* singoutUser() {
    try {
        yield auth.signOut();
        yield put(UserAction.singOutSuccess());
    } catch (error) {
        yield put(UserAction.singOutFail(error));
    }
}

function* createAccount({ payload:{name, email, password} }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );
        yield getSnapsortFromUserAuth(user, { name });
    } catch (error) {
        yield put(UserAction.singupFail(error));
    }
}

export function* googleSinginStart() {
    yield takeLatest(actionTypes.GOOGLE_SINGIN_START, singinWithGoogle);
}
export function* emailAndPasswordSinginStart() {
    yield takeLatest(actionTypes.USER_SINGIN_START, singinWithEmailAndPassword);
}

export function* checkSessionStart() {
    yield takeLatest(actionTypes.CHECK_USER_SESSION, isUserIsAuth);
}

export function* singOutStart() {
    yield takeLatest(actionTypes.SINGOUT_START, singoutUser);
}

export function* singupStart() {
    yield takeLatest(actionTypes.SINGUP_START, createAccount);
}

// combine all the saga
export function* UserSages() {
    yield all([
        call(googleSinginStart),
        call(emailAndPasswordSinginStart),
        call(checkSessionStart),
        call(singOutStart),
        call(singupStart)
    ]);
}
