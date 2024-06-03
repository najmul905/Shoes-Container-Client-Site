import React from 'react';
import { FaEdit, FaHome, FaShoppingBasket, FaUserFriends } from 'react-icons/fa';
import { MdLibraryAdd,MdDelete, MdAdminPanelSettings  } from "react-icons/md";
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const LeftSite = () => {
    return (
        <div className='static '>
            <div className='  fixed md:w-[23vw] md:bg-[#D1A054] bg-black md:opacity-100 bg-opacity-50 text-white menu  mb-8 h-screen md:p-6 w-[70%]'>
            
            
            <ul className='md:ps-4 md:pt-2 md:-mr-52 menu w-[70%]'>
            <li ><Link className='flex items-center text-[10px] md:text-[13px] font-semibold gap-2' to="/dashboard"><span className='text-white '><MdAdminPanelSettings></MdAdminPanelSettings></span> Admin Home</Link></li>
            <li> <Link className='flex items-center text-[10px] md:text-[13px] font-semibold gap-2' to="dashboard/all_user"><span className='text-white'><FaUserFriends></FaUserFriends> </span> All Users</Link></li>
            <li> <Link className='flex items-center text-[10px] md:text-[13px] font-semibold gap-2' to="dashboard/add_products"><span className='text-white'><MdLibraryAdd /></span> Add Products</Link></li>
            <li><Link className='flex items-center text-[10px] md:text-[13px]  font-semibold gap-2' to="dashboard/manege_all_products"><span className='flex items-center text-white'><FaEdit></FaEdit><MdDelete></MdDelete></span> Manage All Products</Link></li>
            <li><Link className='flex items-center text-[10px] md:text-[13px] font-semibold gap-2' to="dashboard/manege_just_for_you"><span className='flex items-center text-white'><FaEdit></FaEdit><MdDelete></MdDelete></span>Manage Just For You</Link></li>
            <li><Link className='flex items-center text-[10px] md:text-[13px] font-semibold gap-2' to="dashboard/manege_offer"><span className='flex items-center text-white'><FaEdit></FaEdit><MdDelete></MdDelete></span>Manage Offer</Link></li>
            <hr className='border-2 bg-black my-2 w-2/4' />
            <li><Link className='flex items-center text-[10px] md:text-[13px] font-bold gap-2' to='/'><span className='text-white'><FaHome></FaHome></span> Home</Link></li>
            <li><Link className='flex items-center text-[10px] md:text-[13px] font-bold gap-2' to="/shope"><span className='text-white'><FaShoppingBasket></FaShoppingBasket></span> Shope</Link></li>
            <li><Link className='flex items-center text-[10px] md:text-[13px] font-bold gap-2' to="/card"><span className='text-white'><FaCartShopping></FaCartShopping></span> Card</Link></li>
            </ul>
        </div>
        </div>
    );
};

export default LeftSite;