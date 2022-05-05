import * as orderProductApi from "../../api/orderProductApi";
import * as orderProductAction from "../orderProductAction";
import { closeLoader, showLoader } from "../loaderAction";
import { clearAllItemsFromCart} from '../cartAction';
import {isLoggedIn} from '../../utils';
import { toast } from "react-toastify";

export const orderProduct = (props) => {
    return async(dispatch) => {
        try {
            dispatch(showLoader());
            let response;
            if(isLoggedIn()){
                response = await orderProductApi.orderProduct(props); //post type
            }else{
                response = await orderProductApi.orderPublicProduct(props);
            }
            let productInfo = "";
            if(response?.data?.success) {
                productInfo = response?.data?.data
                dispatch(clearAllItemsFromCart());
                toast.success("Purchased successfully");
            }
           return dispatch(orderProductAction.orderProduct(productInfo));
        } catch(error) {
            console.error("Error in ordering: " + error);
            toast.error("something went wrong");
        }finally {
            dispatch(closeLoader());
        }
    }
};

