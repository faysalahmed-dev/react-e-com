import shopActionTypes from './Shop.actionTypes';

const initalState = {
  collection: null,
  isLoading: true
};

const shopReducer = (state = initalState, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTION:
      return { ...state, collection: action.payload };
    case shopActionTypes.OFF_SPINER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default shopReducer;
