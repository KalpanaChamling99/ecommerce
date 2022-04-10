import { ACTIONS_TYPES } from '../reducers/registerReducer';

export function register(payload){
    return{
        type: ACTIONS_TYPES.REGISTER,
        payload
    }
}

export function getMembership(payload){
    return{
        type: ACTIONS_TYPES.GET_MEMBERSHIP,
        payload
    }
}
