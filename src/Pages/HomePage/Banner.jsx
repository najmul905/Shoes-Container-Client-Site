import React from 'react';
import Image1 from "/BannerImage/shoes banner1.png"
import Image2 from "./../../../public/BannerImage/shoes banner2.png"
import { FaArrowDown } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='md:h-96 h-60 bg-gradient-to-r flex items-center justify-center from-cyan-400 from-10% to-emerald-400 to-90%'>
            <div className='flex items-center  md:mx-28'>
                <div className='flex-auto w-[25%]'><img className='h-[200hv]' src={Image1} alt="" /></div>
                <div className='flex-auto text-white w-[50%] text-center   rounded-lg  '>
                   <div>
                    <h1 style={{fontFamily:'Croissant One'}} className=' md:text-3xl tracking-wider font-extrabold md:font-bold'>You Favorite Shoes is here</h1>
                    <p  style={{fontFamily:'Croissant'}}>If you Want to Bye...</p>
                    <p style={{fontFamily:'Croissant'}}>You can Bye from here</p>
                    <div className='flex items-center justify-center text-red-300 my-2'> <FaArrowDown></FaArrowDown></div>
                    <button className='bg-gradient-to-r  from-cyan-400 from-10% to-emerald-400 to-90% shadow-slate-900 px-4 py-1 rounded-xl border-b-4 font-medium active:border-b-indigo-400 duration-300 active:'>Shop Here</button>
                   </div>
                    </div>
                <div className='flex-auto w-[25%]'><img className='h-[200hv]' src={Image2} alt="" /></div>
            </div>
        </div>
    );
};

export default Banner;