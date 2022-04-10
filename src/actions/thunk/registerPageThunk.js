import * as registerPageApi from '../../api/registerApi';
import * as registerpageAction from '../registerAction';
import { closeLoader, showLoader } from "../loaderAction";
import { toast } from "react-toastify";

export const getMembership = () => {
    return async(dispatch) => {
        try {
           const response = await registerPageApi.getMembership();
        
           let membership = [];
           if(response?.data?.success ) {
                membership = response?.data?.data
           }
           return dispatch(registerpageAction.getMembership(membership));
        } catch(error) {
            console.error("Error in Type of membership: " + error);
        }
    }
}
export const register = (props) => {
    return async(dispatch) => {
        try {
            dispatch(showLoader());
            const response = await registerPageApi.register(props); 
            let isRegistered = false;
            if(response?.data?.status === "success") {
                toast.success("Registration Successful");
                isRegistered = true;
            }
            return dispatch(registerpageAction.register(isRegistered));
        } catch(error) {
             const errorMessage = error;
            let msg = "";
            if (errorMessage.message === "The email has already been taken.") {
                msg = "Email already exists";
            } else if(errorMessage.message === "The email has already been taken.", "The phone number must be between 8 and 13 digits."){
                msg = "Email and phone number already exists";
            }else{
                 msg = "Something went wrong";
            }
            toast.error(msg);
            console.error("Error in Registration: " + error);
            
        }finally{
            dispatch(closeLoader());
        }
    }
};