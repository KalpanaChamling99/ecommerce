import API from '../utils/axios';
import { ApiEndpoints } from '../constants';


const { ORDER_HISTORY } = ApiEndpoints;
 
export const getOrderHistory = async() => {
    const token = localStorage.getItem("token");
    API.defaults.headers.common['Authorization'] = 'Bearer '+ token ;
    return await API.get(ORDER_HISTORY);
}
