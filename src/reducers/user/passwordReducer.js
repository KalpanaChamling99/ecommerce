export const initialState = {
  isPasswordUpdated: false,
  isEmailSent: false
};
    
  export const ACTIONS_TYPES = Object.freeze({
    UPDATE_PASSWORD: "UPDATE_PASSWORD",
    FORGOT_PASSWORD: "FORGOT_PASSWORD",
    SUCCESS_UPDATE_PASSWORD: "SUCCESS_UPDATE_PASSWORD",
    SUCCESS_FORGOT_PASSWORD: "SUCCESS_FORGOT_PASSWORD"
  });
    
  export function passwordReducer(state = initialState, action) {
      switch (action.type) {
          case ACTIONS_TYPES.UPDATE_PASSWORD:
          return {
            ...state,
            isPasswordUpdated: action.payload,
          };
          case ACTIONS_TYPES.SUCCESS_UPDATE_PASSWORD:
            return {
              ...state,
              isPasswordUpdated: false,
            };
            case ACTIONS_TYPES.FORGOT_PASSWORD:
              return {
                ...state,
                isEmailSent: action.payload,
              };
              case ACTIONS_TYPES.SUCCESS_FORGOT_PASSWORD:
                return {
                  ...state,
                  isEmailSent: false,
                };
        default:
          return state;
      }
    }
    