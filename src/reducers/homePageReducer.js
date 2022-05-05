export const initialState = {
    siteSettings: {},
    services: [],
    supporters: [],
    sliders: [],
    events: {},
    publicProducts: [],
    projects: [] 
  };
  
  export const ACTIONS_TYPES = Object.freeze({
    GET_SITE_SETTINGS: "GET_SITE_SETTINGS",
    GET_SERVICE: "GET_SERVICE",
    GET_SUPPORTERS: "GET_SUPPORTERS",
    GET_PROJECTS: "GET_PROJECTS",
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
        case ACTIONS_TYPES.GET_PROJECTS:
        return {
          ...state,
          projects: action.payload,
        };
        case ACTIONS_TYPES.GET_SLIDERS:
        return {
          ...state,
          sliders: action.payload,
        };
        case ACTIONS_TYPES.GET_EVENTS:
        return {
          ...state,
          events: { data: action.payload?.data, total: action.payload?.total },
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
  