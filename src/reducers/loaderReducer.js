import { OPEN_LOADER, CLOSE_LOADER } from '../actions/types';

const initialState = {
    isLoading: false,
    timeout: 20 //milliseconds
}

export const loaderReducer = (state = initialState, action) => {
    const { type, timeout } = action
    switch (type) {
        case OPEN_LOADER:
            return {
                ...state,
                isLoading: true,
                timeout: timeout !== null ? timeout*1000 : initialState.timeout*1000
            }
        case CLOSE_LOADER:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}