import shopActionTypes from './Shop.actionTypes';

export const updateCollection = payload => ({
  type: shopActionTypes.UPDATE_COLLECTION,
  payload
});
export const offSpiner = () => ({
  type: shopActionTypes.OFF_SPINER
});
