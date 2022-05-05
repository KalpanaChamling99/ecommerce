import API from '../utils/axios';
import { ApiEndpoints } from '../constants';

const { EVENTS_CATEGORY} = ApiEndpoints;

export const getEventsCategory = async() => {
    return API.get(EVENTS_CATEGORY);
};

