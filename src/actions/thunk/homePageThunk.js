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
export const getEvents = () => {
    return async(dispatch) => {
        try {
           const response = await homePageApi.getEvents();
           let events =[];
           if(response?.data?.success) {
                events = response?.data?.data
            }
           return dispatch(homePageAction.getEvents(events));
        } catch(error) {
            console.error("Error in events: " + error);
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