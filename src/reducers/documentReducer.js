export const initialState = {
    documents: []
}
export const ACTIONS_TYPES = Object.freeze({
    GET_DOCUMENTS: "GET_DOCUMENTS"
});
    
export function documentReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.GET_DOCUMENTS:
        return {
            ...state,
            documents: action.payload
        };
        default:
        return state;
    }
}