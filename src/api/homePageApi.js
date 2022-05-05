import API from '../utils/axios';
import { ApiEndpoints } from '../constants';


const { SITE_SETTINGS,SERVICES,SUPPORTERS,PROJECTS,SLIDERS,EVENTS,PUBLIC_PRODUCTS } = ApiEndpoints;
 
export const getSiteSettings = async() => {
    return await API.get(SITE_SETTINGS);
}
export const getServices = async() => {
    return await API.get(SERVICES);
}
export const getSupporters = async() => {
    return await API.get(SUPPORTERS);
}
export const getProjects = async() => {
    return await API.get(PROJECTS);
}
export const getSliders = async() => {
    return await API.get(SLIDERS);
}
export const getEvents = async(params='') => {
    return await API.get(`${EVENTS}?${params}`);
}
export const getPublicProducts = async() => {
    return await API.get(PUBLIC_PRODUCTS);
}