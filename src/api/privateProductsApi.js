import API from '../utils/axios';
import { ApiEndpoints } from '../constants';


const { PRIVATE_PRODUCTS } = ApiEndpoints;

export const getPrivateProducts = async() => {
    const token = localStorage.getItem("token");
    API.defaults.headers.common['Authorization'] = 'Bearer '+ token ;
    return await API.get(PRIVATE_PRODUCTS);
}