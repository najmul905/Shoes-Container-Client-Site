import React, { useContext, useEffect, useState } from 'react';
import {useStripe,CardElement,useElements} from '@stripe/react-stripe-js';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';

const CheckOut = ({price,card}) => {
  const {user}=useContext(AuthContext)
    const stripe=useStripe()
    const element=useElements()
   const [clientSecret,setClientSecret]=useState('')

   useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch('http://localhost:5000/create_payment_intent', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price }) // Send price as an object
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setClientSecret(data.clientSecret); // Ensure the key matches what the server returns
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    };

    createPaymentIntent();
  }, [price]);
    
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(!stripe||!element){
            return;
        }
        const card=element.getElement(CardElement)
        if(card===null){
            return;
        }

    const{error,paymentMethod}=await stripe.createPaymentMethod({
        type:"card",card
    })
    if(error){
        console.log("error",error)
    }
    else{
        console.log('paymentMethod',paymentMethod)
    }
    const {paymentIntent, error:cardError} = await stripe.confirmCardPayment(
     clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'Unknown',
            name:user?.displayName || "anonymous"
          },
        },
      },
    );
    if(cardError){
      console.log(cardError)
    }
    console.log(paymentIntent)

    }
    return (
        <form className='w-2/6  mx-auto' onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className=' border-0 text-[8px] md:text-[15px] border-b-[#bb903f] px-2 rounded font-semibold hover:bg-[#bb903f] hover:text-white border-b-4 active:bg-white active:text-slate-600' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    );
};

export default CheckOut;