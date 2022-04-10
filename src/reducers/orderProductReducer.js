
export const initialState = {
    productInfo: ''
};
    
export const ACTIONS_TYPES = Object.freeze({
    ORDER_PRODUCT: "ORDER_PRODUCT",
    CLEAR_ORDER_PRODUCT: "CLEAR_ORDER_PRODUCT"
});
    
export function orderProductReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.ORDER_PRODUCT:
        return {
            ...state,
            productInfo: action.payload,
        };

        case ACTIONS_TYPES.CLEAR_ORDER_PRODUCT:
        return {
            ...state,
            productInfo: "",
        };
         
        default:
        return state;
    }
}