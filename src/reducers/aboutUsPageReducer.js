export const initialState = {
  teams: []
};

export const ACTIONS_TYPES = Object.freeze({
  GET_TEAMS: "GET_TEAMS",
});

export function aboutUsPageReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS_TYPES.GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    default:
      return state;
  }
}
