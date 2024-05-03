import React from 'react';
import useAllProducts from '../../Components/CoustomHooks/useAllProducts';
import useOfferProducts from '../../Components/CoustomHooks/useOfferProduc';
import useJustForYou from '../../Components/CoustomHooks/useJustForYou';
import useUser from '../../Components/CoustomHooks/useUser';

const AdminHome = () => {
    const[all_products,isPending]=useAllProducts()
    const[offers]=useOfferProducts()
    const[forYou,]=useJustForYou()
    const[users]=useUser()
    
    if (isPending){
        return <div className='flex h-screen items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
    }
    return (
        <div className='grid md:text-[16px] text-[10px] text-white grid-cols-2 gap-5 h-screen items-center justify-center'>
           <div className='rounded-md bg-slate-200 flex flex-wrap text-center items-center justify-center
            h-60'><p className='bg-[#946826] p-12  font-semibold  mask mask-squircle'>All Products <br /> <samp className=' bg-white text-black px-2 italic rounded-full'>{all_products?.length}</samp></p></div>
           <div  className='rounded-md bg-slate-200 flex flex-wrap text-center items-center justify-center h-60'><p className='bg-[#946826] p-12  font-semibold  mask mask-squircle'>Offer Products <br /> <samp className=' bg-white text-black px-2 italic rounded-full'>{offers?.length}</samp></p></div>
           <div  className='rounded-md bg-slate-200 flex flex-wrap text-center items-center justify-center h-60'><p className='bg-[#946826] p-12  font-semibold  mask mask-squircle'>Just For <br /> Consumer Products <br /> <samp className=' bg-white text-black px-2 italic rounded-full'>{forYou?.length}</samp></p></div>
           <div  className='rounded-md bg-slate-200 flex flex-wrap text-center items-center justify-center h-60'><p className='bg-[#946826] p-12  font-semibold  mask mask-squircle'>All users <br /> <samp className=' bg-white text-black px-2 italic rounded-full'>{users?.length}</samp></p></div>
        </div>
    );
};

export default AdminHome;