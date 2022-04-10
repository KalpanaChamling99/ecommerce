export const initialState = {
    orderHistory: []
};
  
export const ACTIONS_TYPES = Object.freeze({
    GET_ORDER_HISTORY: "GET_ORDER_HISTORY",
});
  
  export function orderHistoryReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.GET_ORDER_HISTORY:
            return {
                ...state,
                orderHistory: action.payload,
            };
        
        default:
            return state;
    }
  }
  