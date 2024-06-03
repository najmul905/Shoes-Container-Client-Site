import React from 'react';
import useAllProducts from '../../Components/CoustomHooks/useAllProducts';
import useOfferProducts from '../../Components/CoustomHooks/useOfferProduc';
import useJustForYou from '../../Components/CoustomHooks/useJustForYou';
import useUser from '../../Components/CoustomHooks/useUser';
import HomeChart from './HomeChart';




const AdminHome = () => {
    const [all_products, isPending] = useAllProducts()
    const [offers] = useOfferProducts()
    const [forYou,] = useJustForYou()
    const [users] = useUser()
    
    const MenLoafer=all_products?.filter(data=>data.Category==="Men Loafer")
    const MenFlipFlop=all_products?.filter(data=>data.Category=== "Men Flip Flop")
    const MenSlipper=all_products?.filter(data=>data.Category=== "Men Slipper")
    const HighHeel=all_products?.filter(data=>data.Category=== "High Heel")
    const LowHeel=all_products?.filter(data=>data.Category=== "Low Heel")
    const FormalShoes=all_products?.filter(data=>data.Category===  "Men Formal Shoes")
    const MenSneaker=all_products?.filter(data=>data.Category===  "Men Sneaker")
    const SportBoots=all_products?.filter(data=>data.Category==="Sport Boots")
    console.log(MenLoafer)

    if (isPending) {
        return <div className='flex h-screen items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
    }


    return (
       <div>
        <div className='mt-5 md:flex md:items-center gap-2 '>
           <div className='mx-auto my-4 bg-gradient-to-r from-green-400 to-blue-500 h-24 w-48 flex flex-col items-center justify-center rounded'>
            <h1 className='text-2xl font-bold text-white'>{all_products?.length}</h1>
            <p className='text-2xl font-semibold text-white'>Shoes</p>
           </div>
           <div className='mx-auto my-4 bg-gradient-to-r from-green-700 to-blue-800 h-24 w-48 flex flex-col items-center justify-center rounded'>
            <h1 className='text-2xl font-bold text-white'>{users?.length}</h1>
            <p className='text-2xl font-semibold text-white'>Users</p>
           </div>
           <div className='mx-auto my-4 bg-gradient-to-r from-lime-600 to-cyan-700 h-24 w-48 flex flex-col items-center justify-center rounded'>
            <h1 className='text-2xl font-bold text-white'>{offers?.length}</h1>
            <p className='text-2xl font-semibold text-white'>Offer</p>
           </div>
           <div className='mx-auto my-4 bg-gradient-to-r from-amber-400 to-indigo-500 h-24 w-48 flex flex-col items-center justify-center rounded'>
            <h1 className='text-2xl font-bold text-white'>{forYou?.length}</h1>
            <p className='text-2xl font-semibold text-white'>For Customer</p>
           </div>
        </div>
           <HomeChart></HomeChart>
        </div>
    );
};

export default AdminHome;