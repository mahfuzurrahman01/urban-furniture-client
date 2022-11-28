import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../Shared/Spinner';
import { RiDeleteBin6Line } from 'react-icons/ri'
const Allbuyers = () => {
    document.title = "Buyers";
    const { data: buyers = [], isLoading } = useQuery({
        queryKey: ['sellers'], queryFn: async () => {
            const res = await fetch('http://localhost:5000/allbuyers')
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='border-t-2 border-amber-100 p-5'>
            <h1 className='md:text-2xl text-xl text-gray-700'>Total buyers: <span className='font-semibold'>{buyers.length}</span></h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map(buyer => <tr key={buyer._id}>
                                <td>
                                    <div className="flex items-center">
                                        <div>
                                            <div className="font-bold">{buyer.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">{buyer.email}</span>
                                </td>
                                <td>{buyer.role}</td>
                                <td>
                                    <button className="bg-gray-600 text-md rounded p-1 text-white"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allbuyers;