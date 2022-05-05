import React,{ useState,useMemo, useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import {
    useElements,
    useStripe,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from '@stripe/react-stripe-js';
import {Modal,Button} from 'antd';

import {orderProduct} from '../../actions/thunk/orderPostThunk';
import Loader from '../common/Loader';
import { clearOrderProduct } from '../../actions/orderProductAction';
import { isLoggedIn } from '../../utils';

const useOptions = () => {
    const options = useMemo(
      () => ({
        style: {
          base: {
            color: "#424770",
            letterSpacing: "0.025em",
            fontFamily: "Source Code Pro, monospace",
            "::placeholder": {
              color: "#aab7c4"
            }
          },
          invalid: {
            color: "#9e2146"
          }
        }
      }),
    );
  
    return options;
};
  

const CheckoutForm = (props) => {
    const [isModalVisible,setIsModalVisible] = useState(false);
    const [isConfirmed,setIsConfirmed] = useState(false);
    const { 
        cart: { items,totalAmount},
        loader: { isLoading },
        checkout: {note,from_date,to_date,email,full_name},
        orderProduct: {productInfo}
    } = useSelector((state) => state);

    const dispatch = useDispatch();
    const history = useHistory();
    const [success,setSuccess] =useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    useEffect(() => {
        if(productInfo) {
            dispatch(clearOrderProduct());
            if(isLoggedIn()){
                history.push('/order-history');
            }else{
                history.push('/');
            }
        }
    }, [productInfo, history, dispatch]);

    const confirmHandler =  async(e) =>{
        e.preventDefault();
        setIsModalVisible(false);
        setIsConfirmed(true);
        
        const products = items.map(({
            id: product_id,
            item_name: product_title,
            ...rest
          }) => ({
            product_id,
            product_title,
            ...rest
        }));
        
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });

        if(!error){
            try{
                const {id} = paymentMethod;
                const payload = {
                    amount: totalAmount,
                    products,
                    payment_method_id: id,
                    confirm: true,
                    note,
                    to_date,
                    from_date,
                    email,
                    full_name
                };
                dispatch(orderProduct(payload));
            }catch(error){
                console.error("error",error);
            }
        }else{
            console.error(error.message);
        }
    }
    const cancelHandler = () =>{
        setIsModalVisible(false);
    }

    const submitHandler =(e) =>{
        e.preventDefault();
        setIsModalVisible(true);
    }
  
    return(
        <>
        <Modal 
            visible={isModalVisible} 
            onOk={confirmHandler} 
            onCancel={cancelHandler} className="nant-checkout-modal"
            footer = {[
                <Button key="back" onClick={cancelHandler}>
                    Cancel Order
                </Button>,
                <Button key="submit" type="primary"  onClick={confirmHandler}>
                    Confirm Order
                </Button>
            ]}
            >
        </Modal>
        {!success ?
        <div className="nant-checkout-form-section">
            <div className="container">
                <form onSubmit={submitHandler} className="nant-checkout-form nant-form-layout-1 nant-pos-relative">
                    <label>
                        Card number
                        <CardNumberElement
                            options={options}
                        />
                    </label>
                    <label>
                        Expiration date
                        <CardExpiryElement
                            options={options}
                        />
                    </label>
                    <label>
                        CVC
                        <CardCvcElement
                            options={options}
                        />
                    </label>
                    <button type="submit" disabled={!stripe || isLoading}>Pay</button>
                    {isLoading && <Loader />}
                </form>
            </div>
        </div>
        
        : <div><h2>purchase success</h2></div>
        
        }
        </>
       
    );
};

export default CheckoutForm;