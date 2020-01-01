import { all, call } from 'redux-saga/effects';

import { fetchCollections } from '../Redux/Shop/Shop.sagas';
import { UserSages } from '../Redux/User/User.sagas';
import { cartSaga } from './Cart/Cart.sagas';

export default function* rootSaga() {
    yield all([call(fetchCollections), call(UserSages), call(cartSaga)]);
}
