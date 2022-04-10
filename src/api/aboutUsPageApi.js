import API from '../utils/axios';
import { ApiEndpoints } from '../constants';


const { TEAMS } = ApiEndpoints;
 
export const getTeams = async() => {
    return await API.get(TEAMS);
}