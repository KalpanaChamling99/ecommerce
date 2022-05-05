import { ACTIONS_TYPES } from '../reducers/pastCommitteeReducer';

export function getPastCommittee(payload) {
    return {
        type: ACTIONS_TYPES.GET_PAST_COMMITTEE,
        payload
    }
}

export function getPastCommitteeCategory(payload){
    return{
        type: ACTIONS_TYPES.GET_PAST_COMMITTEE_CATEGORY,
        payload
    }
}
