import actionType from './User.actionTypes';
export default class UserAction {
    static checkUserSession = () => ({
        type: actionType.CHECK_USER_SESSION
    });

    static emailAndPasswordSinginStart = user => ({
        type: actionType.USER_SINGIN_START,
        payload: user
    });

    static googleSingStart = () => ({
        type: actionType.GOOGLE_SINGIN_START
    });

    static singinSuccess = user => ({
        type: actionType.SINGIN_SUCCESS,
        payload: user
    });

    static singinFail = errorMessage => ({
        type: actionType.SINGIN_FAIL,
        payload: errorMessage
    });

    static singOutStart = () => ({
        type: actionType.SINGOUT_START
    });

    static singOutSuccess = () => ({
        type: actionType.SINGOUT_SUCCESS
    });

    static singOutFail = () => ({
        type: actionType.SINGOUT_FAIL
    });

    static singupStart = user => ({
        type: actionType.SINGUP_START,
        payload: user
    });

    static singupSuccess = user => ({
        type: actionType.SINGUP_SUCCESS,
        payload: user
    });
    static singupFail = error => ({
        type: actionType.SINGUP_FAIL,
        payload: error
    });
}
