import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShopCategory = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/banner_category")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='static mt-[72px]'>
            
                <div className=' fixed md:w-[23vw] md:bg-[#D1A054] bg-black md:opacity-100 bg-opacity-50 text-white menu  mb-8 h-screen p-6'>
                    <li className='active text-white text-[10px] md:text-[13px] font-semibold'><Link to="/shope">All Shoes</Link></li>
                    {
                        Data?.map(data => <div className='text-base-content' key={data._id}>

                            <ul className=" text-base-content">
                                {/* Sidebar content here */}
                                <li> <Link className='py-2  text-[10px] md:text-[13px] font-semibold text-white ' to={`shopMainSide/${data.Category}`}> <a>{data.Category}</a></Link></li>

                            </ul>
                        </div>)
                    }
                </div>
        </div>
    );
};

export default ShopCategory;