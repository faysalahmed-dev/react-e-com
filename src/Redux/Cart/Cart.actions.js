import actionTypes from './Cart.actionTypes';

export const toggleCart = () => ({
  type: actionTypes.TOGGLE_CART
});
export const addItemToCart = item => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  paylod: item
});
export const removeItemFromCart = item => ({
  type: actionTypes.REMOVE_ITEM_FROM_CART,
  paylod: item
});