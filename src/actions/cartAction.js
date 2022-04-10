import { ACTIONS_TYPES } from '../reducers/cartReducer';

export function addItemsToCart(payload) {
    return {
        type: ACTIONS_TYPES.ADD_ITEMS_TO_CART,
        payload
    }
}
export function updateCartQuantity(payload) {
    return {
        type: ACTIONS_TYPES.UPDATE_CART_QUANTITY,
        payload
    }
}

export function removeItemsFromCart(payload) {
    return {
        type: ACTIONS_TYPES.REMOVE_ITEMS_FROM_CART,
        payload
    }
}
export function clearItemsFromCart(payload) {
    return {
        type: ACTIONS_TYPES.CLEAR_ITEMS_FROM_CART,
        payload
    }
}
export function clearAllItemsFromCart() {
    return {
        type: ACTIONS_TYPES.CLEAR_ALL_ITEMS_FROM_CART,
    }
}