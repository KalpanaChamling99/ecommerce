export const initialState = {
  pastCommittee: [],
  isLoading: false,
};

export const ACTIONS_TYPES = Object.freeze({
  GET_PAST_COMMITTEE: "GET_PAST_COMMITTEE",
  FETCH_PAST_COMMITTEE: "FETCH_PAST_COMMITTEE",
});

export function pastCommitteeReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS_TYPES.FETCH_PAST_COMMITTEE:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS_TYPES.GET_PAST_COMMITTEE:
      return {
        ...state,
        isLoading:false,
        pastCommittee: action.payload,
      };
    default:
      return state;
  }
}
