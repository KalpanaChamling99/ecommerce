import { ACTIONS_TYPES } from '../reducers/homePageReducer';

export function getSiteSettings(payload) {
    return {
        type: ACTIONS_TYPES.GET_SITE_SETTINGS,
        payload
    }
}
export function getServices(payload) {
    return {
        type: ACTIONS_TYPES.GET_SERVICE,
        payload
    }
}
export function getSupporters(payload) {
    return {
        type: ACTIONS_TYPES.GET_SUPPORTERS,
        payload
    }
}
export function getProjects(payload) {
    return {
        type: ACTIONS_TYPES.GET_PROJECTS,
        payload
    }
}
export function getSliders(payload) {
    return {
        type: ACTIONS_TYPES.GET_SLIDERS,
        payload
    }
}
export function getEvents(payload) {
    return {
        type: ACTIONS_TYPES.GET_EVENTS,
        payload
    }
}
export function getPublicProducts(payload) {
    return {
        type: ACTIONS_TYPES.GET_PUBLIC_PRODUCTS,
        payload
    }
}
