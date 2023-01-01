import React from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkoutform from './CheckoutForm';
const CLIENT_ID = process.env.CLIENT_STRIPE_KEY;

const stripePromise = loadStripe(CLIENT_ID);

function Payment() {
   
  return (
    <div>
        <h1 style={{color:"#f1faee"}}>Payment </h1>
        <Elements stripe={stripePromise}>
            <Checkoutform/>
        </Elements>
        <Link to='/checkout/information'>
            <button>Regresar</button>
        </Link>
    </div>
  )
}

export default Payment