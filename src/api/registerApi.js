import API from '../utils/axios';
import { ApiEndpoints } from '../constants';

const { REGISTER,MEMBERSHIP } = ApiEndpoints;

export const getMembership = async() => {
    return API.get(MEMBERSHIP);
};

export const register = async(data) => {
    return API.post(REGISTER,JSON.stringify(data));
}