import { ACTIONS_TYPES } from '../reducers/documentReducer';

export function getDocuments(payload) {
    return {
        type: ACTIONS_TYPES.GET_DOCUMENTS,
        payload
    }
}