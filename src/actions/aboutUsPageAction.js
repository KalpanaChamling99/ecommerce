import { ACTIONS_TYPES } from '../reducers/aboutUsPageReducer';

export function getTeams(payload) {
    return {
        type: ACTIONS_TYPES.GET_TEAMS,
        payload
    }
}
