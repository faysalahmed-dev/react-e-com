import { combineReducers } from 'redux';
import userReducers from './User/User.reducer'
import cartReducers from './Cart/Cart.reducer'

// combine all the reducer in one root reducer
const rootReducer = combineReducers({
  user: userReducers,
  cart: cartReducers
});

export default rootReducer;
