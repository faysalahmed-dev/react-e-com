import * as actionType from './User.actionTypes'

const INITIAL_STATE = {
  currentUser: null
};

const userReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.paylod
      };
    default:
      return state;
  }
};
export default userReducers;
