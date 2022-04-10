import { ACTIONS_TYPES } from '../reducers/orderProductReducer';

export function orderProduct(payload) {
    return {
        type: ACTIONS_TYPES.ORDER_PRODUCT,
        payload
    }
}

export function clearOrderProduct() {
    return {
        type: ACTIONS_TYPES.CLEAR_ORDER_PRODUCT
    }
}



