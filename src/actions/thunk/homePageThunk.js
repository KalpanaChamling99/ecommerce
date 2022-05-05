import * as homePageApi from '../../api/homePageApi';
import * as homePageAction from '../homePageAction';
import { closeLoader, showLoader } from '../loaderAction';


export const getSiteSettings = () => {
    return async(dispatch) => {
        try {
           const response = await homePageApi.getSiteSettings();
        
           let siteSettings = {};
           if(response?.data?.success) {
                siteSettings = response?.data?.data[0]
           }

           return dispatch(homePageAction.getSiteSettings(siteSettings));
        } catch(error) {
            console.error("Error in getSiteSettings: " + error);
        }
    }
}
export const getServices = () => {
    return async(dispatch) => {
        try {
           const response = await homePageApi.getServices();
           let services =[];
           if(response?.data?.success) {
                services = response?.data?.data
            }
           return dispatch(homePageAction.getServices(services));
        } catch(error) {
            console.error("Error in page services: " + error);
        }
    }
}
export const getSupporters = () => {
    return async(dispatch) => {
        try {
           const response = await homePageApi.getSupporters();
           let supporters =[];
           if(response?.data?.success) {
                supporters = response?.data?.data
            }
           return dispatch(homePageAction.getSupporters(supporters));
        } catch(error) {
            console.error("Error in supporters: " + error);
        }
    }
}
export const getProjects = () => {
    console.log("error in projects");
    return async(dispatch) => {
        try {
           const response = await homePageApi.getProjects();
           let projects =[];
           if(response?.data?.success) {
                projects = response?.data?.data
            }
           return dispatch(homePageAction.getProjects(projects));
        } catch(error) {
            console.error("Error in Projects: " + error);
        }
    }
}
export const getSliders = () => {
    return async(dispatch) => {
        try {
           dispatch(showLoader());
           const response = await homePageApi.getSliders();
           let sliders =[];
           if(response?.data?.success) {
                sliders = response?.data?.data
            }
           
            return dispatch(homePageAction.getSliders(sliders));

        } catch(error) {
            console.error("Error in slider: " + error);
        } finally {
           dispatch(closeLoader());
        }
    }
}
export const getEvents = (params='') => {
    return async(dispatch) => {
        try {
            dispatch(showLoader());
           const response = await homePageApi.getEvents(params);
           let events = {};
           if(response?.data?.success) {
                events = { data: response?.data?.data, total: response?.data?.total_records };
            }
           return dispatch(homePageAction.getEvents(events));
        } catch(error) {
            console.error("Error in events: " + error);
        }finally {
            dispatch(closeLoader());
        }
    }
}
export const getPublicProducts = () => {
    return async(dispatch) => {
        try {
           const response = await homePageApi.getPublicProducts();
           let publicProducts =[];
           if(response?.data?.success) {
                publicProducts = response?.data?.data
            }
           return dispatch(homePageAction.getPublicProducts(publicProducts));
        } catch(error) {
            console.error("Error in public products: " + error);
        }
    }
}