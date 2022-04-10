import * as OrderHistoryApi from '../../api/orderHistoryApi';
import * as orderHistoryAction from '../orderHistoryAction';
import { closeLoader, showLoader } from '../loaderAction';

export const getOrderHistory = () => {
    return async(dispatch) => {
        try {
           dispatch(showLoader());
           const response = await OrderHistoryApi.getOrderHistory();
           let orderHistory =[];
           if(response?.data?.success) {
                orderHistory = response?.data?.data
            }
            return dispatch(orderHistoryAction.getOrderHistory(orderHistory));

        } catch(error) {
            console.error("Error in OrderHistory: " + error);
        } finally {
           dispatch(closeLoader());
        }
    }
}