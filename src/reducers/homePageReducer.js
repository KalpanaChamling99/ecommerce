export const initialState = {
    siteSettings: {},
    service: {},
    supporters: [],
    sliders: [],
    events: [],
    publicProducts: [] 
  };
  
  export const ACTIONS_TYPES = Object.freeze({
    GET_SITE_SETTINGS: "GET_SITE_SETTINGS",
    GET_SERVICE: "GET_SERVICE",
    GET_SUPPORTERS: "GET_SUPPORTERS",
    GET_SLIDERS: "GET_SLIDERS",
    GET_EVENTS: "GET_EVENTS",
    GET_PUBLIC_PRODUCTS: "GET_PUBLIC_PRODUCTS"
  });
  
  export function homePageReducer(state = initialState, action) {
    switch (action.type) {
      case ACTIONS_TYPES.GET_SITE_SETTINGS:
        return {
          ...state,
          siteSettings: action.payload,
        };
        case ACTIONS_TYPES.GET_SERVICE:
        return {
          ...state,
          services: action.payload,
        };
        case ACTIONS_TYPES.GET_SUPPORTERS:
        return {
          ...state,
          supporters: action.payload,
        };
        case ACTIONS_TYPES.GET_SLIDERS:
        return {
          ...state,
          sliders: action.payload,
        };
        case ACTIONS_TYPES.GET_EVENTS:
        return {
          ...state,
          events: action.payload,
        };
        case ACTIONS_TYPES.GET_PUBLIC_PRODUCTS:
        return {
          ...state,
          publicProducts: action.payload,
        };
      default:
        return state;
    }
  }
  