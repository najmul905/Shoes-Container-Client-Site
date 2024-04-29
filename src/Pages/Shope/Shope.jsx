import React from 'react';
import { Outlet } from 'react-router-dom';
import ShopCategory from '../../Components/SharePage/Shope/ShopCategorySide/ShopCategory';



const Shope = () => {
   
    return (
        <div className='md:grid grid-cols-4  md:mx-4 '>
            <div className='hidden md:block'>
            <ShopCategory></ShopCategory>
            </div>
            <div className='col-span-3 ps-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Shope;