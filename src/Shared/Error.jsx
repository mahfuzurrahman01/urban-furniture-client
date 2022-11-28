import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/error/404 Error-rafiki.png'
const Error = () => {
    return (
        <div className='w-11/12 mx-auto'>
              <img src={img} alt="img" className='lg:w-1/4 md:1/2 w-11/12 mx-auto'/>
            <div className="text-center">
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8   text-gray-700">But dont worry, you can find plenty of other things on our homepage.</p>
                <Link to='/' rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded bg-primary text-white">Back to homepage</Link>
            </div>
        </div>
    );
};

export default Error;