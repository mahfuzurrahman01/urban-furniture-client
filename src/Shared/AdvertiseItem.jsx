import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';
import Spinner from './Spinner';

const AdvertiseItem = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'], queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise')
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='md:w-11/12 w-full mx-auto'>
            {
                products.length > 0 && <section className="py-6 sm:py-12    bg-transparent ">
                    <div className="container p-6 mx-auto space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-5xl font-light">Hot Deals</h2>
                            <div className='w-3/4 mx-auto ' data-aos='fade-left'>
                                <div className="p-6 py-12  bg-secondary bg-gradient-to-r from-primary rounded-xl my-5 text-gray-50">
                                    <div className="container mx-auto">
                                        <div className="flex flex-col lg:flex-row items-center justify-between">
                                            <h2 className="text-center md:text-6xl text-4xl tracking-tighter font-bold">Up to
                                                <br className="sm:hidden"/>50% Off
                                            </h2>
                                            <div className="space-x-2 text-center py-2 lg:py-0">
                                                <span>Plus free shipping! Use code:</span>
                                                <span className="font-bold text-lg">urban</span>
                                            </div>
                                            <a href="# " rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block  bg-gray-50  text-gray-900  border-gray-400">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="lg:flex gap-4 justify-center items-center flex-wrap grid md:grid-cols-2 grid-cols-1">
                            {
                                products.map(product => <AdvertiseCard key={product.advertiseId} product={product} ></AdvertiseCard>)
                            }
                        </div>
                    </div>
                </section>
            }

        </div >
    );
};

export default AdvertiseItem;