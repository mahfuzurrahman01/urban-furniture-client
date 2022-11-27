import React from 'react';
import { Link } from 'react-router-dom';

const BookingCard = ({ refetch, product }) => {
    console.log(product)
    const { itemName, itemImage, price, location, index } = product

    return (
        <div className="flex flex-col sm:flex-row sm:justify-between mt-5 text-gray-100 bg-zinc-500 bg-gradient-to-l from-gray-700 rounded-lg bg-opacity-70 p-5">
            <div className="flex w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover lg:w-32 lg:h-32 md:w-52 h-32 w-32  border-transparent rounded outline-none sm:w-32 sm:h-32  bg-gray-500" src={itemImage} alt="Polaroid camera" />
                <div className="flex flex-col justify-between w-full lg:pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-xl leading-snug sm:pr-8">{itemName}</h3>
                            <p className="text-sm  text-gray-800">{location}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xl font-semibold">${price}</p>

                        </div>
                    </div>
                    <div className='flex md:justify-between md:flex-row flex-col items-center'>
                        <div className="flex text-sm divide-x">
                            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                    <rect width="32" height="200" x="168" y="216"></rect>
                                    <rect width="32" height="200" x="240" y="216"></rect>
                                    <rect width="32" height="200" x="312" y="216"></rect>
                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span>Remove</span>
                            </button>
                            <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                                <span>Favorites</span>
                            </button>
                        </div>
                        {
                            product.paid === true ? <button className=' bg-secondary duration-500 bg-gradient-to-l from-primary py-1 px-9 rounded text-white w' disabled>Paid</button> : <Link to={`/dashboard/payment/${index}`}><button className='bg-gradient-to-l bg-gray-300 from-zinc-500 hover:bg-secondary duration-500 hover:bg-gradient-to-l hover:from-primary py-1 px-9 rounded text-white w'>Pay</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;