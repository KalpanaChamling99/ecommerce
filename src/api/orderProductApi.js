import API from '../utils/axios';
import { ApiEndpoints } from '../constants';


const { ORDER_PRODUCT,ORDER_PUBLIC_PRODUCT } = ApiEndpoints;

 
export const orderProduct = async(data) => {
    const token = localStorage.getItem("token");
    API.defaults.headers.common['Authorization'] = 'Bearer '+ token ;
    return await API.post(ORDER_PRODUCT,JSON.stringify(data));
}
export const orderPublicProduct = async(data) => {
    return await API.post(ORDER_PUBLIC_PRODUCT,JSON.stringify(data));
}