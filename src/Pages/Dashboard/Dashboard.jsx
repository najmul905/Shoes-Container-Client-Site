import React from 'react';
import LeftSite from '../../Components/SharePage/DashboardElement/LeftSite';
// import RightSite from '../../Components/SharePage/DashboardElement/RightSite';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='md:grid grid-cols-4 mx-12'>
            <div className='hidden md:block'>
                <LeftSite></LeftSite>
            </div>
            <div className='col-span-3 ps-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;