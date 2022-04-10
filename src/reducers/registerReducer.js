
export const initialState = {
    isRegistered: false,
    membership:[],
};
    
export const ACTIONS_TYPES = Object.freeze({
    REGISTER: "REGISTER",
    GET_MEMBERSHIP: "GET_MEMBERSHIP"
});
    
export function registerReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.REGISTER:
        return {
            ...state,
            isRegistered: action.payload
        };

        case ACTIONS_TYPES.GET_MEMBERSHIP:
        return {
            ...state,
            membership: action.payload,
        };
         
        default:
        return state;
    }
}