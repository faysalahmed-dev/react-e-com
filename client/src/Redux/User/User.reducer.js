import actionType from './User.actionTypes';

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.SINGIN_SUCCESS:
        case actionType.SINGUP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case actionType.SINGOUT_SUCCESS:
            return { ...INITIAL_STATE };

        case actionType.SINGIN_FAIL:
        case actionType.SINGOUT_FAIL:
        case actionType.SINGUP_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
export default userReducers;
