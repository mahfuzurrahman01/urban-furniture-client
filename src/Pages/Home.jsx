import React from 'react';

const Home = () => {
    document.title = "Home";
    
    return (
        <div className='lg:w-5/6 md:w-11/12 w-full mx-auto'>
            <h1>This is home section </h1>
        </div>
    );
};

export default Home;