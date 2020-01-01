import { takeLatest, call, put } from 'redux-saga/effects';
import shopActionTypes from './Shop.actionTypes';

import { fetchCollectionSuccess, fetchCollectionFail } from './Shop.action';

import {
    firestore,
    transformDataFromSnapshot
} from '../../FireBase/FireBase.utils';

function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collection');
        const snapShot = yield collectionRef.get();
        const collectionMap = yield call(transformDataFromSnapshot, snapShot);
        yield put(fetchCollectionSuccess(collectionMap));
    } catch (err) {
        put(fetchCollectionFail(err.message));
    }
}

export function* fetchCollections() {
    yield takeLatest(
        shopActionTypes.COLLECTION_FETCHING_START,
        fetchCollectionsAsync
    );
}
