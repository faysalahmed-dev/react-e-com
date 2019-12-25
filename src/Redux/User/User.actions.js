import * as actionType from './User.actionTypes';

export const setCurrentUser = user => ({
  type: actionType.SET_CURRENT_USER,
  paylod: user
});
