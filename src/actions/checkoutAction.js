import { CHECKOUT }from './types';

export const checkout = (payload) => {
    return{
        type: CHECKOUT,
        payload
    }
}