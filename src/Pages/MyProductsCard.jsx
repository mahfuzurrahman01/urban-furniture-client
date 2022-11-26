import React from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri'
const MyProductsCard = ({ product, refetch }) => {

    const { productName, productImage, resalePrice, postedTime, categoryName, _id } = product
    const removeHandle = id => {
        fetch(`http://localhost:5000/myProducts/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount >= 1){
                    toast.success('Product deleted')
                   refetch()

                }
            })
    }
    return (
        <div>
            <div className=" rounded-md shadow-md bg-primary text-gray-100 bg-opacity-90">
                <img src={productImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 brightness-75" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{productName}</h2>

                        <p className="text-gray-100">Category: {categoryName}</p>
                        <p className="text-gray-100">Resale Price: ${resalePrice}</p>
                        <p className="text-gray-100">Posted Time: {postedTime}</p>
                    </div>
                    <button onClick={() => removeHandle(_id)} type="button" className="flex items-center justify-center hover:bg-gray-500 hover:bg-gradient-to-r hover:from-zinc-700 duration-500 w-full p-3 font-semibold tracking-wide rounded-md bg-secondary bg-gradient-to-r from-primary text-white"><RiDeleteBin6Line className='mr-1'></RiDeleteBin6Line> Remove Item</button>
                </div>
            </div>
        </div>
    );
};

export default MyProductsCard;