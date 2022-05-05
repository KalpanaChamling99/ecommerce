import * as documentPageApi from '../../api/documentPageApi';
import * as documentPageAction from '../documentPageAction';
import { closeLoader, showLoader } from '../loaderAction';

export const getDocuments = () => {
    return async(dispatch) => {
        try {
            dispatch(showLoader());
            const response = await documentPageApi.getDocuments();
            let documents = [];
            if(response?.data?.success) {
                documents = response?.data?.data
            }
            return dispatch(documentPageAction.getDocuments(documents));
        } catch(error) {
            console.error("Error in Documents: " + error);
        }finally{
            dispatch(closeLoader());
        }
    }
}
