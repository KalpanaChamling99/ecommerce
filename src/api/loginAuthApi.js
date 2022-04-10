import API from '../utils/axios';
import { ApiEndpoints } from '../constants';


const { LOGIN } = ApiEndpoints;
 
export const loginSuccess = async(email,password) => {
    return await API.post(LOGIN,{email,password});
}
