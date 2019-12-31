import shopActionTypes from './Shop.actionTypes';

import {
  firestore,
  transformDataFromSnapshot
} from '../../FireBase/FireBase.utils';

export const fetchCollectionStart = () => ({
  type: shopActionTypes.COLLECTION_FETCHING_START
});

export const fetchCollectionSuccess = payload => ({
  type: shopActionTypes.COLLECTION_FETCH_SUCCESSFUL,
  payload
});

export const fetchCollectionFail = payload => ({
  type: shopActionTypes.COLLECTION_FETCH_FAIL,
  payload
});

// fetch collections using redux thunk
export const fetchCollections = () => {
  return dispatch => {
    dispatch(fetchCollectionStart()); // to start loading
    const collectionRef = firestore.collection('collection');
    collectionRef.onSnapshot(
      async doc => {
        const collectionMap = transformDataFromSnapshot(doc);
        await dispatch(fetchCollectionSuccess(collectionMap));
      },
      error => dispatch(fetchCollectionFail(error.message))
    );
  };
};
