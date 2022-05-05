import React from 'react';
import { withRouter } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './../components/checkout/CheckoutForm';
import config from '../config';

const { STRIPE: { PUBLIC_KEY } } = config;

const stripePromise = loadStripe(PUBLIC_KEY);

const Checkout = () =>{
    
    return(
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};
export default withRouter(Checkout);