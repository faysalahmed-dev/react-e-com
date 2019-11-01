import actionTypes from './Cart.actionTypes';
import setUpItemQuntity from './Cart.utils';

const INTITAL_STATE = {
  hidden: true,
  cartItem: []
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
        cartItem: setUpItemQuntity(state.cartItem, action.paylod)
      };
    default:
      return state;
  }
};

export default cartReducer;
