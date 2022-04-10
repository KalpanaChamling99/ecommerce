import { OPEN_LOADER, CLOSE_LOADER } from './types';

export const showLoader = (timeout=null) => {
    return {
        type: OPEN_LOADER,
        timeout
    }
}

export const closeLoader = () => {
    return {
        type: CLOSE_LOADER
    }
}