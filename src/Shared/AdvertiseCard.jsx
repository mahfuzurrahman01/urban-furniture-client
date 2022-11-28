import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({ product }) => {
    const { productImage, productName, sellerName, resalePrice, categoryId } = product;
    return (
        <article className="flex flex-col  bg-gray-200 " data-aos='fade-up'>
            <Link to={`/category/${categoryId}`} rel="noopener noreferrer" href="    " aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="product" className="object-cover w-full h-52" src={productImage} />
            </Link>
            <div className="flex flex-col flex-1 p-6">
                <Link to={`/category/${categoryId}`} rel="noopener noreferrer" className="text-xl uppercase text-gray-800">Item: {productName}</Link>
                <p rel="noopener noreferrer" href="    " className="text-xl text-gray-800">Posted by <span className='font-semibold'>{sellerName}</span></p>
                <h3 className="flex-1 py-2 lg:text-2xl text-xl text-gray-800 font-semibold leading-snug">${resalePrice}</h3>
                <div>
                    <p>Find more products in this category! <Link to={`/category/${categoryId}`}><span className='text-white bg-secondary bg-gradient-to-r from-primary py-1 px-2 rounded cursor-pointer'>check it out</span></Link></p>
                </div>
            </div>
        </article>
    );
};

export default AdvertiseCard;