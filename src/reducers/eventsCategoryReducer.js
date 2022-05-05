export const initialState = {
    eventsCategory: []
}

export const ACTIONS_TYPES = Object.freeze({
    GET_EVENTS_CATEGORY: "GET_EVENTS_CATEGORY"
});
    
export function eventCategoryReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.GET_EVENTS_CATEGORY:
        return {
            ...state,
            eventsCategory: action.payload
        };
         
        default:
        return state;
    }
}