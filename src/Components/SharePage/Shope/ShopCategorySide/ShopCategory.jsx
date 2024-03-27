import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

const ShopCategory = () => {
    const[Data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/banner_category")
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])
    return (
            <div className=''>
                <div className='bg-slate-200 menu h-screen p-6'>
            <li className='active'><Link  to="/shope/">All Shoes</Link></li>
                {
                    Data.map(data=><div className='text-base-content' key={data._id}>
                     
                      <ul className=" text-base-content">
      {/* Sidebar content here */}
      <li> <Link className='py-2' to={`shopMainSide/${data.Category}`}> <a>{data.Category}</a></Link></li>
      
    </ul>
                    </div>)
                }
        </div>
            </div>
    );
};

export default ShopCategory;