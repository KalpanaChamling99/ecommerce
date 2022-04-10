import { ACTIONS_TYPES } from '../reducers/orderHistoryReducer';

export function getOrderHistory(payload) {
    return {
        type: ACTIONS_TYPES.GET_ORDER_HISTORY,
        payload
    }
}