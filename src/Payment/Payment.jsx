import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from '../Shared/CheckOut';

const Payment = () => {
    document.title = "payment";
    const data = useLoaderData()
    console.log(data)
    const { itemName, price } = data;
    const stripePromise = loadStripe(process.env.REACT_APP_PK);
    console.log(stripePromise)
    return (
        <div>
            <h1 className='text-2xl ml-3 bg-secondary bg-gradient-to-r from-primary text-white inline-block py-1 px-3 rounded'>Payment for {itemName}</h1>
            <p className='text-2xl mx-3 my-2'>Please Pay <span className='font-semibold'>${price}</span></p>
            <div className='w-full'>
                <Elements stripe={stripePromise}>
                    <CheckOut data={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;