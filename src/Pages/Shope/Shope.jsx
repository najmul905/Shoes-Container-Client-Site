import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ShopCategory from '../../Components/SharePage/Shope/ShopCategorySide/ShopCategory';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";


const Shope = () => {
    const [toggle,setToggle]=useState(true)
    console.log(toggle)
   
    return (
        <div className='  flex  md:grid grid-cols-4 md:mx-4 relative'>
            <div className='flex'>
            <div className={`absolute md:static duration-500 ${toggle?"-left-[440px]":"left-0"} `}>
            <ShopCategory></ShopCategory>
            </div>
            <div className='md:hidden fixed items-center flex justify-center h-screen w-4 '> 
            <button  onClick={()=>setToggle(!toggle)}>{toggle?<FaChevronCircleRight size={18} />:<FaChevronCircleLeft size={18} />}</button>
            </div>
            </div>
            <div className='md:col-span-3 px-2 md:ps-5 ms-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Shope;