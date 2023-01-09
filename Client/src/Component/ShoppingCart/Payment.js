import React from 'react';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkoutform from './CheckoutForm';
import { Center } from '@chakra-ui/react';
// const CLIENT_ID = process.env.CLIENT_STRIPE_KEY;

const stripePromise = loadStripe('pk_test_51MHeUICJ6dzvxdbT8nkQycPzhyRBG49Lz72MnXIFJgPttBKaHHyYh6ZJeSkRH0YX0iKdeNuBGqRycG6XIWCqfCTl00TJaA8AEj');

function Payment() {
   
  return (
    <div>
        <Center fontSize={30} color='white'>Payment </Center>
          <Elements stripe={stripePromise}>
              <Checkoutform/>
          </Elements>

    </div>
  )
}

export default Payment