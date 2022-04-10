export const initialState = {
  user: {},
  loggedIn: false,
  errorMessage: {},
};
  
export const ACTIONS_TYPES = Object.freeze({
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  LOGOUT: "LOGOUT"
});
  
export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          loggedIn: true,
          errorMessage: {}
        };
        case ACTIONS_TYPES.LOGIN_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
        };
        case ACTIONS_TYPES.LOGOUT:
        return {
          ...state,
          loggedIn: false,
          user: {},
          errorMessage: {}
        };
      
      default:
        return state;
    }
  }
  