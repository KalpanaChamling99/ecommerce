import { CHECKOUT } from '../actions/types';
 
const initialState = {
    note: '',
    from_date: '',
    to_date: '',
    full_name:'',
    email:''
}

export const checkoutReducer = (state =initialState,action) => {
    const { type } = action
    switch(type){
        case CHECKOUT:
            return{
                ...state,
                from_date: action.payload.from_date,
                note: action.payload.note || '',
                to_date: action.payload.to_date,
                full_name: action.payload.full_name,
                email: action.payload.email
            }
        default: 
        return state
    }
}