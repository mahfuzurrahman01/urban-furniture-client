import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='py-1 px-4 bg-primary bg-gradient-to-r from-secondary rounded text-white'>{children}</button>
    );
};

export default Button;