import { ACTIONS_TYPES } from '../reducers/user/passwordReducer';

export function updatePassword(payload){
    return{
        type: ACTIONS_TYPES.UPDATE_PASSWORD,
        payload
    }
}
export function successUpdatePassword(payload){
    return{
        type: ACTIONS_TYPES.SUCCESS_UPDATE_PASSWORD,
    }
}
export function forgotPassword(payload){
    return{
        type: ACTIONS_TYPES.FORGOT_PASSWORD,
        payload
    }
}
export function successForgotPassword(){
    return{
        type: ACTIONS_TYPES.SUCCESS_FORGOT_PASSWORD,
    }
}