import React,{ useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {FaTrashAlt} from 'react-icons/fa';
import { 
    addItemsToCart,
    removeItemsFromCart,
    clearItemsFromCart,
    updateCartQuantity
} from '../../actions/cartAction';

const CartItem = (props) => {
    const dispatch = useDispatch();
    
    const selectedItem = useSelector((state) => state.cart.items.find(item => item.id === props.id));
    let quantity = selectedItem?.quantity ?? 0;

    const [enteredQuantity,setEnteredQuantity] = useState();
   

    const {id,item_name,description,price,image} = props;

    useEffect(()=>{
        setEnteredQuantity(selectedItem.quantity);
    },[]);

    const addToCartHandler = () => {
        setEnteredQuantity(quantity + 1);
        dispatch(addItemsToCart({
            id,
            item_name,
            description,
            price,
            image,
            quantity: 1
        }));
    }

    const amountChangehandler = (event) => {
        event.preventDefault();
        setEnteredQuantity(event.target.value);
        dispatch(updateCartQuantity({
            id,
            quantity: Number(event.target.value),
            price: Number(price)
        }));
    }
   
    const removeCartHandler = () =>{
        dispatch(removeItemsFromCart(id));
        setEnteredQuantity(selectedItem.quantity);
    }
    const clearCartHandler = () =>{
        dispatch(clearItemsFromCart({
            id,
            quantity: enteredQuantity,
            price: Number(price)
        }));
    }
    return(

        <tr  key={props.key}>
            <td>{props.item_name}</td>
            <td><img src={props.image} style={{width:`60px`,height:`auto`}}/></td>
            <td>${props.price}</td>
            <td>
                <div className="add-to-cart-quantity">
                    <div className="quantity">
                        <button onClick={addToCartHandler}>+</button>
                        <input
                            id = 'quantity'
                            type ='text'
                            value= {enteredQuantity}
                            onChange = {amountChangehandler}
                            className="amount-field"
                        />
                        <button onClick={removeCartHandler}>-</button>
                    </div>
                </div>
            </td>
            <td>${props.subTotal}</td>
            <td><button onClick={clearCartHandler} className="clear-btn"><FaTrashAlt /></button></td>
        </tr>
    );
};

export default CartItem;