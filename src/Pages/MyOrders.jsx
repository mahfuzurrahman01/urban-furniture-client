import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import BookingCard from '../Shared/BookingCard';
import Spinner from '../Shared/Spinner';

const MyOrders = () => {
    document.title = "My Orders";
    const { user } = useContext(AuthContext)
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ['bookings'], queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings/?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='border-t-2 border-amber-100 p-5'>
            <h1 className=' text-lg'>You have {products.length} bookings! <br /> Please pay before the products become sold.</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-5'>
                {
                    products.map(product => <BookingCard key={product._id} product={product} isLoading={isLoading} refetch={refetch}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default MyOrders;