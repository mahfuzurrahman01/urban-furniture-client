import React, { useContext, useState } from 'react';
import logo from '../assets/logo/V-Furniture.png'
import { MdVerified } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import BookingModal from '../Shared/BookingModal';
import toast from 'react-hot-toast';

const ProductDetails = () => {
    const { user } = useContext(AuthContext)
    const [modalState, setModalState] = useState(null)

    const data = useLoaderData()
    console.log(data)
    const { categoryImage, categoryName } = data[0]

    const wishlistHandle = product => {
        console.log(product)
        const details = { ...product, buyersEmail: user?.email }
        console.log(details)
        fetch('http://localhost:5000/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product to wishlist')
                }
            })
    }

    return (
        <div>
            <div className='lg:w-11/12 w-full mx-auto relative'>
                <img src={categoryImage} className='brightness-50 lg:h-[700px] md:h-[500px] lg:w-full' alt="" />
                <div className='absolute md:top-1/3 top-1/4 lg:right-[430px] md:right-[150px] right-[60px]'>
                    <nav aria-label="breadcrumb" className="w-full p-4   bg-transparent  text-primary">
                        <p className='text-center md:text-7xl text-3xl bg-amber-100 bg-opacity-30 p-5 rounded-lg font-light text-white uppercase'>{categoryName}</p>
                        <ol className="flex h-8 space-x-2 justify-center">
                            <li className="flex items-center">
                                <Link to='/' rel="noopener noreferrer" title="Back to homepage" className="hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-7 h-7 pr-1   text-gray-400 fill-gray-400">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                    </svg>
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-gray-400   text-gray-600">
                                    <path d="M32 30.031h-32l16-28.061z"></path>
                                </svg>
                                <Link to='/' rel="noopener noreferrer" href=" " className="flex items-center px-1 capitalize hover:underline text-white">Home</Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-gray-400   text-gray-600">
                                    <path d="M32 30.031h-32l16-28.061z"></path>
                                </svg>
                                <a rel="noopener noreferrer" href=" " className="flex items-center px-1 capitalize text-white hover:underline hover:no-underline cursor-default">Current</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-4/5 w-11/12 mx-auto my-10 gap-5'>
                {
                    data.map((product, i) => <div key={i}><div className="rounded-md shadow-md bg-secondary bg-opacity-90  bg-gradient-to-r from-primary text-gray-100" >
                        <div className="flex items-center justify-between p-3" data-aos="fade-up">
                            <div className="flex items-center space-x-3">
                                <img src={logo} alt="" className="object-cover object-center w-10 h-10 rounded-full shadow-sm   bg-gray-500   border-gray-700" />
                                <div className="">
                                    <h2 className="text-lg leading-none">{product.sellerName}</h2>
                                    <span className='text-xs border font-semibold'>{product.status === 'sold' ? 'Sold out' : 'Available'}</span>

                                </div>
                            </div>
                            <button title="Open options" type="button">
                                {
                                    product?.position === 'verified' && <MdVerified className='text-blue-600 w-7 h-7  rounded-full'></MdVerified>
                                }
                            </button>
                        </div>
                        <img src={product?.productImage} alt="" className="object-cover object-center w-full h-72 brightness-90" data-aos="fade-right" />
                        <div className="p-3" data-aos="fade-left">

                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <p className='text-xl font-semibold text-gray-100 flex flex-col items-baseline gap-1 '>{product.productName}</p>

                                </div>
                                <div title="Bookmark post" className="flex flex-col items-center justify-center">
                                    <p className='text-2xl text-gray-200'>${product.resalePrice}</p>
                                    <p className='text-sm text-gray-300 line-through'> ${product.originalPrice}</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-end'>
                                <div>
                                    <p className='text-sm font-bold text-gray-300'>Location: <span className='font-normal'>{product.sellerLocation}</span></p>
                                    <p className='text-sm font-bold text-gray-300'>Used:<span className='font-normal'> {product.yearsOfUse}</span></p>
                                    <p className='text-sm font-bold text-gray-300'>Original Price: <span className='font-normal'>${product.originalPrice}</span></p>
                                    <button onClick={() => wishlistHandle(product)} className='text-xs text-gray-800 hover:text-gray-100 font-semibold my-1 p-1 rounded-sm bg-slate-400 hover:bg-gray-500 hover:bg-gradient-to-l hover:from-zinc-600 duration-500'>Add to wishlist</button>
                                </div>
                                <div>
                                    <span className='text-xs font-semibold leading-none flex items-center gap-1 text-gray-300'><SlCalender className='w-4 h-4'></SlCalender> {product.postedTime}</span>
                                </div>
                            </div>
                            <div>
                                {
                                    product.status === 'sold' ? <button disabled onClick={() => setModalState(product)} htmlFor="my-modal-4" className="w-full block text-secondary text-center py-2 px-3 rounded mt-5 bg-gray-100 font-bold hover:bg-gray-300 duration-300">sold out</button>:<label onClick={() => setModalState(product)} htmlFor="my-modal-4" className="w-full block text-secondary text-center py-2 px-3 rounded mt-5 bg-gray-100 font-bold hover:bg-gray-300 duration-300">Book Now</label>
                                }
                            </div>
                        </div>
                    </div>
                    </div>)
                }

            </div>
            <div>
                {
                    modalState && <BookingModal setModalState={setModalState} modalState={modalState}></BookingModal>
                }
            </div>
        </div>
    );
};

export default ProductDetails;