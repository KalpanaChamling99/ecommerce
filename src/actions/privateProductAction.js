import { ACTIONS_TYPES } from '../reducers/user/privateProductReducer';


export function getPrivateProducts(payload) {
    return {
        type: ACTIONS_TYPES.GET_PRIVATE_PRODUCTS,
        payload
    }
}
