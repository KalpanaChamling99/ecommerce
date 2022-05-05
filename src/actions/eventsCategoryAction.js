import { ACTIONS_TYPES } from '../reducers/eventsCategoryReducer';


export function getEventsCategory(payload){
    return{
        type: ACTIONS_TYPES.GET_EVENTS_CATEGORY,
        payload
    }
}
