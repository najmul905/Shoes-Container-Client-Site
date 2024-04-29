import React from 'react';
import useAllProducts from '../../Components/CoustomHooks/useAllProducts';

const ManageAllProducts = () => {
    const [all_products, isPending]=useAllProducts()
    // console.log(all_products.length)
    console.log(all_products)
    if (isPending){
        return <div className='flex h-full items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
    }
    
    return (
        <div className='text-[10px] md:text-[16px]'>
          {all_products?.map((data,index)=><div key={index}>
            <div className='flex items-center mt-4 gap-4  bg-slate-200 rounded border-2 hover:shadow-2xl'>
                <img className='md:h-[200px] md:w-[220px] md:p-8 rounded h-[100px] w-[110px] p-2' src={data.Image} alt="" />
                <div className='py-2'>
                    <p>Name: {data.Name}</p>
                    <p>Price: ${data.Price}</p>
                    <p>Details: {data.Details}</p>
                    <hr className='bg-white border-2' />
                    <div className='flex items-center gap-2 md:gap-6 md:mt-4'>
                        <button className='text-white font-semibold rounded px-2 bg-[#6d605e]'>Edit</button>
                        <button className='text-white font-semibold rounded px-2 bg-[#FF6347]'>Delete</button>
                    </div>
                </div>
            </div>
          </div>)}
        </div>
    );
};

export default ManageAllProducts;