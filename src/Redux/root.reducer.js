import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducers from './User/User.reducer';
import cartReducers from './Cart/Cart.reducer';

// persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // name of reducer obj
};

// combine all the reducer in one root reducer
const rootReducer = combineReducers({
  user: userReducers,
  cart: cartReducers
});

export default persistReducer(persistConfig, rootReducer);
