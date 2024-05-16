import React from 'react';
import{Elements} from '@stripe/react-stripe-js'
import CheckOut from './CheckOut';
import {loadStripe} from '@stripe/stripe-js';
import useCard from '../../Components/CoustomHooks/useCard';



const stripePromise=loadStripe(import.meta.env.VITE_publishableKey)
console.log(import.meta.env.VITE_publishableKey)

const Payment = () => {
    const [card]=useCard()
    const totalPrice= (card || []).reduce((sum, item) => sum + parseFloat(item.Price || 0), 0).toFixed(2);
    return (
        <div className='mt-28'>
           <Elements stripe={stripePromise}>
      <CheckOut price={totalPrice}
      card={card}></CheckOut>
    </Elements>
        </div>
    );
};

export default Payment;