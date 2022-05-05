import * as eventsCategoryApi from '../../api/eventCategoryApi';
import * as  eventsCategoryAction from '../eventsCategoryAction';
import { closeLoader, showLoader } from "../loaderAction";

export const getEventsCategory = () => {
    return async(dispatch) => {
        try {
            dispatch(showLoader());
           const response = await eventsCategoryApi.getEventsCategory();
        
           let eventsCategory = [];
           if(response?.data?.success ) {
                eventsCategory = response?.data?.data
           }
           return dispatch(eventsCategoryAction.getEventsCategory(eventsCategory));
        } catch(error) {
            console.error("Error in fetching events category: " + error);
        }finally {
            dispatch(closeLoader());
         }
    }
}
