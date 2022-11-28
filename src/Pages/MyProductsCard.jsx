import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri'
const MyProductsCard = ({ product, refetch }) => {
    console.log(product)
    const { productName, productImage, resalePrice, postedTime, categoryName, _id, status, categoryId, sellerName, sellerEmail } = product
    const advertiseProduct = {
        advertiseId: _id,
        categoryId,
        productName,
        productImage,
        sellerName,
        sellerEmail,
        resalePrice,
    }
    const removeHandle = id => {
        fetch(`https://urban-eta.vercel.app/myProducts/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount >= 1) {
                    toast.success('Product deleted')
                    refetch()

                }
            })
    }
    const advertiseHandle = () => {
        fetch('https://urban-eta.vercel.app/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(advertiseProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.added === 'added') {
                    toast.error('Item Already Added')
                }
                if (data.insertedId) {
                    toast.success('Item added for advertise!')
                }
            })
    }
    return (
        <div>
            <div className=" rounded-md shadow-md bg-primary text-gray-100 bg-opacity-90">
                <img src={productImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 brightness-75" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-3xl font-semibold tracking-wide">{productName}</h2>
                            {
                                status === 'sold' ? <button className='text-xs font-semibold border p-1' disabled>Sold</button> : <button onClick={advertiseHandle} className='text-xs font-semibold border p-1 hover:bg-gray-300 hover:text-gray-700 duration-300'>Advertise</button>
                            }
                        </div>
                        <p className="text-gray-100">Category: {categoryName}</p>
                        <p className="text-gray-100">Resale Price: ${resalePrice}</p>
                        <p className="text-gray-100">Posted Time: {postedTime}</p>
                    </div>
                    {
                        status === 'sold' ? <button onClick={() => removeHandle(_id)} type="button" className="flex items-center justify-center bg-gray-500 bg-gradient-to-r from-zinc-700 duration-500 w-full p-3 font-semibold tracking-wide rounded-md  text-white" disabled><RiDeleteBin6Line className='mr-1'></RiDeleteBin6Line> Remove Item</button> : <button onClick={() => removeHandle(_id)} type="button" className="flex items-center justify-center hover:bg-gray-500 hover:bg-gradient-to-r hover:from-zinc-700 duration-500 w-full p-3 font-semibold tracking-wide rounded-md bg-secondary bg-gradient-to-r from-primary text-white"><RiDeleteBin6Line className='mr-1'></RiDeleteBin6Line> Remove Item</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProductsCard;