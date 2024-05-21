import React, { useContext, useEffect, useState } from 'react';
import {useStripe,CardElement,useElements} from '@stripe/react-stripe-js';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import useCard from '../../Components/CoustomHooks/useCard';

const CheckOut = ({price}) => {
  const {user}=useContext(AuthContext)
  const [cards,refetch]=useCard()
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
    if(paymentIntent.status==="succeeded"){
      const payment ={
        email:user?.email,
        totalPrice:price,
        transactionId:paymentIntent.id,
        CardItemId:cards.map(item=>item.itemId),
        cardId:cards.map(item=>item._id)
      }
      fetch('http://localhost:5000/payment',{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(payment)
      })
      .then(res=>res.json())
      .then((data)=>{
        if(data.DeleteResult.acknowledged){
          refetch()
        }
      })
      
    }

    }
    return (
       <div>
         <form className=' mx-auto rounded bg-white text-center' onSubmit={handleSubmit}>
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
      <button className=' border-0 text-[8px] mt-12 mb-4  md:text-[15px] border-b-[#bb903f] px-6 rounded font-semibold hover:bg-[#bb903f] hover:text-white border-b-4 active:bg-white active:text-slate-600' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
       </div>
    );
};

export default CheckOut;