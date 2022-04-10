import React,{useMemo,useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Loader from '../../components/common/Loader';
import {
    useElements,
    useStripe,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from '@stripe/react-stripe-js';
import {
    Form,
    Button,
    Checkbox
} from 'antd';

import {register} from '../../actions/thunk/registerPageThunk';

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

const MembershipPayment = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();
    const dispatch = useDispatch();
    const history = useHistory();

    const [isAmountZero,setIsAmountZero] = useState(false);
    const { registration: {isRegistered,membership},loader: {isLoading} } = useSelector((state)=> state);

    const membershipId = membership.find( item => item.id == props.memberInfo.membership_type);
    const amount = membershipId.amount;

    useEffect(()=>{
        if(isRegistered){
            history.push('/login');
        }
    },[isRegistered,history]);


    const submitHandler =  async(e) =>{
       
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });

        if(!error){
            try{
                const {id} = paymentMethod;
                dispatch(register({...props.memberInfo,payment_method_id: id,amount}));
            }catch(error){
                console.error("error",error);
            }
        }else{
            console.error(error.message);
        }
    }

    return(
        <>
            <Form onFinish={submitHandler} className="nant-checkout-form nant-form-layout-1 nant-pos-relative">
            
                <div className="nant-form-element">
                    <label>Email</label>
                    <input type="text" name="email" value={props.memberInfo.email} />
                </div>
                <div className="nant-form-element">
                    <label>Billing Amount in AUD</label>
                    <h4>$ {amount}</h4>
                </div>
                <div className="nant-form-element">
                    <label>
                        Card number
                        <CardNumberElement
                                options={options}
                        />
                    </label>
                </div>
                <div className="nant-form-element">
                    <label>
                        Expiration date
                        <CardExpiryElement
                            options={options}
                        />
                    </label>
                </div>
                <div className="nant-form-element">
                    <label>
                        CVC
                        <CardCvcElement
                            options={options}
                        />
                    </label>
                </div>
                <div className="nant-form-element nant-checkbox">
                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                        {
                            validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    >
                        <Checkbox>I agree to terms & conditions</Checkbox>
                    </Form.Item>
                </div>
                <div className="nant-btn-section">
                    <Form.Item disabled={!stripe}>
                        <Button type="primary" htmlType="submit">
                            Pay via stripe
                        </Button>
                    </Form.Item>
                </div>
                {isLoading && <Loader />}
            </Form>
        </>
        )
};
export default MembershipPayment;