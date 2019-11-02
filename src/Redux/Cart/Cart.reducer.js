import actionTypes from './Cart.actionTypes';
import { setUpItemQuntity } from './Cart.utils';

const INTITAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INTITAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case actionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: setUpItemQuntity(state.cartItems, action.paylod)
      };
    case actionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.paylod.id)
      };
    default:
      return state;
  }
};

export default cartReducer;
