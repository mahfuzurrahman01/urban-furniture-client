import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    document.title = "payment";
    const data = useLoaderData()
    console.log(data)
    const { productName,resalePrice } = data;
    return (
        <div>
            <h1 className='text-2xl ml-3 bg-secondary bg-gradient-to-r from-primary text-white inline-block py-1 px-3 rounded'>Payment for {productName}</h1>
            <p className='text-2xl mx-3 my-2'>Please Pay <span className='font-semibold'>${resalePrice}</span></p>
        </div>
    );
};

export default Payment;