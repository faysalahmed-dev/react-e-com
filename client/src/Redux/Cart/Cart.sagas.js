import { takeLatest, put, call, all } from 'redux-saga/effects';

import userActionTypes from '../User/User.actionTypes';
import { clearCart } from './Cart.actions';

function* clearCartStart() {
    yield put(clearCart());
}

function* onsingoutSuccess() {
    yield takeLatest(userActionTypes.SINGOUT_SUCCESS, clearCartStart);
}

export function* cartSaga() {
    yield all([call(onsingoutSuccess)]);
}
