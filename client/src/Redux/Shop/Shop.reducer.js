import shopActionTypes from './Shop.actionTypes';

const initalState = {
  collection: null,
  isLoading: true,
  errorMessage: null
};

const shopReducer = (state = initalState, action) => {
  switch (action.type) {
    case shopActionTypes.COLLECTION_FETCHING_START:
      return { ...state, isLoading: true };

    case shopActionTypes.COLLECTION_FETCH_SUCCESSFUL:
      return { ...state, isLoading: false, collection: action.payload };

    case shopActionTypes.COLLECTION_FETCH_FAIL:
      return { ...state, isLoading: false, errorMessage: action.payload };

    default:
      return state;
  }
};

export default shopReducer;
