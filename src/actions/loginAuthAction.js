import { ACTIONS_TYPES } from '../reducers/loginReducer';

export function loginSuccess(payload) {
    return {
        type: ACTIONS_TYPES.LOGIN_SUCCESS,
        payload
    }
}
export function loginFailure(payload) {
    return {
        type: ACTIONS_TYPES.LOGIN_FAILURE,
        payload
    }
}
export function logout(payload) {
    return {
        type: ACTIONS_TYPES.LOGOUT,
        payload
    }
}


