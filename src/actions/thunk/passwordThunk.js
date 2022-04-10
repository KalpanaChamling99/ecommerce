import * as passwordApi from "../../api/passwordApi";
import * as passwordAction from '../passwordAction';
import { closeLoader, showLoader } from "../loaderAction";
import { toast } from "react-toastify";

export const updatePassword = (props) => {
    return async(dispatch) => {
        try {
            dispatch(showLoader());
            const response = await passwordApi.updatePassword(props); 
            let isPasswordUpdated = false;
            if(response?.data?.success) {
                isPasswordUpdated = true;
                toast.success("Password changed Successfully");
            }else{
                toast.error("Error in updating password");
            }
            dispatch(passwordAction.updatePassword(isPasswordUpdated));
        } catch(error) {
            console.log("error");
            toast.error("something went wrong");

        } finally {
            dispatch(closeLoader());
        }
    }
};
export const forgotPassword = (props) => {
    return async(dispatch) => {
        try {
            dispatch(showLoader());
            const response = await passwordApi.forgotPassword(props); 
            let isEmailSent = false;
            if(response?.data?.success) {
                isEmailSent = true;
                toast.success("Email sent successfully");
                dispatch(passwordAction.forgotPassword(isEmailSent));
            }else{
                toast.error("Error in sending email");
            }
        } catch(error) {
            console.log("error",error);
            toast.error("something went wrong");

        } finally {
            dispatch(closeLoader());
        }
    }
};