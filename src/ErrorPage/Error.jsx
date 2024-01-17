import React from 'react';

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-slate-400 h-screen">
           <div className='text-center'>
            <h1 className='text-3xl font-semibold text-green-700 my-12'>Here is nothing</h1>
            <h1 className='text-4xl font-bold text-red-400 my-5'>Error</h1>
            <h1 className='text-9xl font-bold text-red-600'>420</h1>
           </div>
        </div>
    );
};

export default Error;