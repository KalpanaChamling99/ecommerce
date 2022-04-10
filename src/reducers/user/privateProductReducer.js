export const initialState = {
    privateProducts: [] 
};

export const ACTIONS_TYPES = Object.freeze({
    GET_PRIVATE_PRODUCTS: "GET_PRIVATE_PRODUCTS",
});
export function privateProductsReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.GET_PRIVATE_PRODUCTS:
            return {
                ...state,
                privateProducts: action.payload,
            };
        default:
            return state;
    }
}