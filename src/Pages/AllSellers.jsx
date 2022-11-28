import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Spinner from '../Shared/Spinner';

const AllSellers = () => {
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'], queryFn: async () => {
            const res = await fetch('http://localhost:5000/allsellers')
            const data = await res.json()
            return data;
        }
    })
    const deleteHandle = (email, name) => {
        fetch(`http://localhost:5000/seller?email=${email}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    toast.success(`Deleted ${name}'s all data from Urban`)

                }
            })
    }


    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='border-t-2 border-amber-100 p-5'>
            <h1 className='md:text-2xl text-xl text-gray-700'>Total sellers: <span className='font-semibold'>{sellers.length}</span></h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map(seller => <tr key={seller._id}>
                                <td>
                                    <div className="flex items-center">
                                        <div>
                                            <div className="font-bold">{seller.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{seller.email}</span>
                                </td>
                                <td><button className='bg-gray-500 rounded p-1 text-white text-xs'>Verify seller</button></td>
                                <td>
                                    <button onClick={() => deleteHandle(seller.email, seller.name)} className="bg-gray-600 text-md rounded p-1 text-white"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;