import React, { useState } from 'react';
import LeftSite from '../../Components/SharePage/DashboardElement/LeftSite';
// import RightSite from '../../Components/SharePage/DashboardElement/RightSite';
import { Outlet } from 'react-router-dom';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const Dashboard = () => {
    const [toggle,setToggle]=useState(true)
    return (
        <div className='  flex z-10  md:grid grid-cols-4 md:mx-4 relative'>
        <div className='flex'>
        <div className={` absolute md:static duration-500 ${toggle?"-left-[440px]":"left-0"} `}>
        <LeftSite></LeftSite>
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

export default Dashboard;