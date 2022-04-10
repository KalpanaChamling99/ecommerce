import { ACTIONS_TYPES } from '../reducers/pastCommitteeReducer';

export function getPastCommittee(payload) {
    return {
        type: ACTIONS_TYPES.GET_PAST_COMMITTEE,
        payload
    }
}
