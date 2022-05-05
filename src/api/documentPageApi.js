import API from '../utils/axios';
import { ApiEndpoints } from '../constants';

const { DOCUMENTS } = ApiEndpoints;

export const getDocuments = async() => {
    return API.get(DOCUMENTS);
};