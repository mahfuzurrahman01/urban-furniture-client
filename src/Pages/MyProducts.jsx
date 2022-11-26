import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Spinner from '../Shared/Spinner';
import MyProductsCard from './MyProductsCard';

const MyProducts = () => {
    document.title = "My Products";
    const { user } = useContext(AuthContext)
    const { data: products = [], isLoading,refetch } = useQuery({
        queryKey: ['products'], queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProducts/?email=${user?.email}`)
            const data = await res.json()
            return data;

        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='border-t-2 border-amber-100 p-5'>
            <h1 className='text-xl font-semibold'>You have {products.length} {products.length >= 1 ? 'products' : 'product'} in dashboard!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                {
                    products.map(product => <MyProductsCard refetch={refetch} key={product._id} product={product}></MyProductsCard>)
                }
            </div>
        </div>
    );
};

export default MyProducts;