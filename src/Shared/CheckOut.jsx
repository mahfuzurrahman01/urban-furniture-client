import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { reload } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from './Spinner';

const CheckOut = ({ data }) => {
    console.log(data)
    const { price, name, email, index } = data;
    console.log(data)
    const [errorText, setErrorText] = useState('')
    const [success, setSuccess] = useState('')
    // const [processing, setProcessing] = useState(false)
    const [transaction, setTransaction] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const [loader, setLoader] = useState(true)
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://urban-eta.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
                setLoader(false)
            });
    }, [price]);

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {

            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {

            setErrorText(error.message)
            toast.error(error.message)
        }
        else {
            setErrorText('')
        }
        setSuccess('')
        setTransaction('')
        // setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            },
        );
        if (confirmError) {
            setErrorText(confirmError.message)
            return;
        }
        if (paymentIntent.status === "succeeded") {

            const payment = {
                price,
                email,
                transactionId: paymentIntent.id,
                bookingId: index
            }

            fetch('https://urban-eta.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        // setProcessing(false)

                        setSuccess('Congrats! payment successfully done')
                        toast.success('Congrats! payment successfully done')

                        setTransaction(paymentIntent.id)
                    }
                })
            // setProcessing(false)
        }

    }


    if (loader) {
        return <Spinner></Spinner>
    }
    return (
        <div className='w-1/2 mx-10 my-5 bg-gray-300 p-10 bg-opacity-60 rounded-lg'>
            <form onSubmit={handleSubmit}>
                <CardElement className='bg-amber-50 py-4 px-4 rounded'
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
                <p className='text-red-600 text-xs'>{errorText}</p>

                {
                    success && <><p className='text-xs text-green-600 mt-1'>{success}</p> <p className='text-xs text-green-600'>Your TransactionId is <span className='font-semibold'>{transaction}</span></p></>
                }

                <button className='w-full bg-primary rounded text-white mt-5 py-2 px-4 bg-gradient-to-r from-secondary' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckOut;