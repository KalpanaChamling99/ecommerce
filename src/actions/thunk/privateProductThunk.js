import * as privateProductsApi from '../../api/privateProductsApi';
import * as privateProductsAction from '../privateProductAction';
import { closeLoader, showLoader } from '../loaderAction';

export const getPrivateProducts = () => {
    return async(dispatch) => {
        try {
            dispatch(showLoader());
            const response = await privateProductsApi.getPrivateProducts();
            let privateProducts =[];
            if(response?.data?.success) {
                privateProducts = response?.data?.data
            }
            return dispatch(privateProductsAction.getPrivateProducts(privateProducts));
        } catch(error) {
            console.error("Error in private products: " + error);
        }finally{
            dispatch(closeLoader());
        }
    }
}