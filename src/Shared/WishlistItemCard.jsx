import React from 'react';
import { Link } from 'react-router-dom';

const WishlistItemCard = ({ refetch, product }) => {
    console.log(product)
    const { productImage, productName, sellerLocation, resalePrice, yearsOfUse, sellerName } = product
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between mt-5 text-gray-100 bg-zinc-500 bg-gradient-to-l from-gray-700 rounded-lg bg-opacity-70 p-5">
            <div className="flex w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-20 h-20  border-transparent rounded outline-none sm:w-32 sm:h-32  bg-gray-500" src={productImage} alt="Polaroid camera" />
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-xl leading-snug sm:pr-8">{productName}</h3>
                            <p className="text-sm  text-gray-800">{sellerLocation}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xl font-semibold">${resalePrice}</p>

                        </div>
                    </div>
                    <p>Used: {yearsOfUse}</p>
                    <p>Seller: {sellerName}</p>
                    <div className='flex justify-between items-center'>
                        <Link to='/dashboard/myOrders'> <button className='bg-gradient-to-l bg-gray-300 from-zinc-500 hover:bg-secondary duration-500 hover:bg-gradient-to-l hover:from-primary py-1 px-9 rounded text-white w-full'>Go to My orders</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistItemCard;