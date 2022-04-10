export const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};
    
export const ACTIONS_TYPES = Object.freeze({
    ADD_ITEMS_TO_CART: "ADD_ITEMS_TO_CART",
    UPDATE_CART_QUANTITY: "UPDATE_CART_QUANTITY",
    REMOVE_ITEMS_FROM_CART: "REMOVE_ITEMS_FROM_CART",
    CLEAR_ITEMS_FROM_CART: "CLEAR_ITEMS_FROM_CART",
    CLEAR_ALL_ITEMS_FROM_CART: "CLEAR_ALL_ITEMS_FROM_CART"
});
    
export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.ADD_ITEMS_TO_CART:
           
            const newItem = action.payload;
            
            const existingItem = state.items.find( item => item.id === newItem.id);
            let updatedItems = state.items;

            if(!existingItem){
                updatedItems.push({...newItem,quantity:1,totalPrice: newItem.price});
                state.totalQuantity = state.totalQuantity + 1;
                state.totalAmount = state.totalAmount + newItem.price;
                
            }else{
                existingItem.quantity++;
                state.totalQuantity = state.totalQuantity + 1;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price; 
                state.totalAmount =  state.totalAmount + existingItem.price; 
            }

            return {
                ...state,
                items: updatedItems,
                totalQuantity: state.totalQuantity,
                totalAmount: state.totalAmount
            };

        // UPDATE ITEM

        case ACTIONS_TYPES.UPDATE_CART_QUANTITY:
            const updateExistingItem = action.payload;
            const updatingItem = state.items.find( item => item.id === updateExistingItem.id);
           
            const prevTotalQuantity = updatingItem.quantity; 
            const prevTotalPrice = updatingItem.totalPrice;
           
            updatingItem.quantity = updateExistingItem.quantity;
            updatingItem.totalPrice = updateExistingItem.price * updatingItem.quantity; //updating sub total(Total price of selected item) 

            state.totalQuantity = state.totalQuantity + updateExistingItem.quantity - prevTotalQuantity;
            state.totalAmount = state.totalAmount + updatingItem.totalPrice - prevTotalPrice;
           
            return {
                ...state,
                totalQuantity: state.totalQuantity,
                totalAmount: state.totalAmount
            };

        // REMOVE ITEMS
        case ACTIONS_TYPES.REMOVE_ITEMS_FROM_CART:
            const itemId = action.payload;
            const removeExistingItem = state.items.find(item => item.id === itemId);
            state.totalQuantity--;

            if(removeExistingItem?.quantity === 1){
                const removeIndex = state.items.findIndex(item => item.id === itemId); //find index of item
                state.items.splice(removeIndex, 1); // remove selected item from array of objects
                state.totalAmount = state.totalAmount - removeExistingItem.price;
            }else{
                removeExistingItem.quantity--;
                removeExistingItem.totalPrice = removeExistingItem.totalPrice - removeExistingItem.price;
                state.totalAmount = state.totalAmount - removeExistingItem.price;
            }
            return {
                ...state,
                items: state.items,
                totalQuantity: state.totalQuantity,
                totalAmount: state.totalAmount,
            };

        // CLEAR ITEMS

        case ACTIONS_TYPES.CLEAR_ITEMS_FROM_CART:
            const clearItemId = action.payload;
            const clearItemPrevQuantity = Number(clearItemId.quantity);

             const clearItemPrevTotalPrice = clearItemId.price * clearItemPrevQuantity;

            const removeIndex = state.items.findIndex(item => item.id === clearItemId);
            state.items.splice(removeIndex, 1);
            state.totalQuantity = state.totalQuantity - clearItemPrevQuantity;
            state.totalAmount = state.totalAmount - clearItemPrevTotalPrice;

            return{
                ...state,
                items: state.items,
                totalQuantity: state.totalQuantity,
                totalAmount: state.totalAmount
            }
            case ACTIONS_TYPES.CLEAR_ALL_ITEMS_FROM_CART:
                return{
                    ...state,
                    items: [],
                    totalQuantity: 0,
                    totalAmount: 0,
                }
        default:
        return state;
    }
}

    