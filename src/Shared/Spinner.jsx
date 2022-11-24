import React from 'react';
import { HashLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='flex flex-col items-center justify-center my-[10%]'>
            <HashLoader
                color="#0c5952"
                cssOverride={{}}
                loading
                speedMultiplier={1}
            />
        </div>
    );
};

export default Spinner;