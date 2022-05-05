import React,{ useState, useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {FaTrashAlt} from 'react-icons/fa';
import { 
    addItemsToCart,
    removeItemsFromCart,
    clearItemsFromCart,
    updateCartQuantity
} from '../../actions/cartAction';

import {FaCalendarAlt} from 'react-icons/fa';

const Product = (props) => {
    const dispatch = useDispatch();
    
    const selectedItem = useSelector((state) => state.cart.items.find(item => item.id === props.id));
    let quantity = selectedItem?.quantity ?? 0;

    const [enteredQuantity,setEnteredQuantity] = useState();
   

    const [isQuantityVisible,setIsQuantityVisible] = useState();
    const {id,item_name,description,price,image} = props;

    const date = new Date(props?.date);  
    const month =  date?.toLocaleString('en-US',{month:'long'});
    const day =  date?.toLocaleString('en-US',{day:'2-digit'});
    const year =  date?.getFullYear();
    let publishedDate = '';
    if(date.length > 0){
        publishedDate = `${day} ${month} ${year}`; 
    }

    useEffect(() => {
        if(!selectedItem) {
            setIsQuantityVisible(false);
        }
    }, [selectedItem]);

    const addToCartHandler = () => {
        setIsQuantityVisible(true);
        setEnteredQuantity(quantity + 1);
        dispatch(addItemsToCart({
            id,
            item_name,
            description,
            price:Number(price),
            quantity: 1,
            image
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
        setIsQuantityVisible(false);
    }
    return(
        <div className="single-blog-card nant-product" key={props.key}>
            <div className="featured-img bg-cover" style={{backgroundImage:`url(${props.image})`}}>
            </div>
            <div className="blog-details">
                
                {publishedDate && <span className="meta-tag"><span className="icon"><FaCalendarAlt /></span>{publishedDate}</span>}
                <h3> <a to="news-details.html">{props.item_name}</a></h3>
                <p> {props.description } </p>
                <p>${props.price}</p>

                {!isQuantityVisible && <button className="add-to-cart-btn" onClick={addToCartHandler}>Add to Cart</button>}
                {isQuantityVisible && 
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
                        <button onClick={clearCartHandler} className="clear-btn"><FaTrashAlt /></button>
                    
                    </div>
                } 


            </div>
        </div>
    );
};

export default Product;