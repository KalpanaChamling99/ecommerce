import API from '../utils/axios';
import { ApiEndpoints } from '../constants';

const { UPDATE_PASSWORD,FORGOT_PASSWORD } = ApiEndpoints;

export const updatePassword = async(data) => {
    const token = localStorage.getItem("token");
    API.defaults.headers.common['Authorization'] = 'Bearer '+ token ;
    return API.post(UPDATE_PASSWORD,JSON.stringify(data));
}

export const forgotPassword = async(data) => {
    return API.post(FORGOT_PASSWORD,JSON.stringify(data));
}