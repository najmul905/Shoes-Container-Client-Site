import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidUserCircle } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {

    const link=<>
    <ul className='md:flex md:items-center '>
        <li><Link  to='/' className=' my-12 font-semibold text-gray-800 hover:text-gray-400 duration-500'>Home</Link></li>
        <li><Link to='/shope' className='md:ml-8 font-semibold text-gray-800 hover:text-gray-400 duration-500'>Shope</Link></li>
        <li><Link to='/dashboard' className='md:ml-8 font-semibold text-gray-800 hover:text-gray-400 duration-500' >Dashboard</Link></li>
        <li><Link to='/card'  className='flex items-center font-semibold md:ml-8 text-gray-800 hover:text-gray-400 duration-500'>Card<FaCartShopping></FaCartShopping></Link></li>
    </ul>
    </>
const [open,setOpen]=useState(false)

    return (
        <div className=' flex justify-between   md:px-10 px-2 py-4 bg-white'>
           <div className='flex items-center'>
           <button className='flex items-center text-black'><h1 style={{fontFamily:'Croissant One'}}>Shoity Cosmetics  </h1> <img className='h-7 w-7' src="/Shoity Cosmetics.png" alt="" /></button>
            <div onClick={()=>setOpen(!open)} className='text-2xl text-black right-12 px-2 bg-white  absolute md:static md:hidden'>
            {open? <AiOutlineClose></AiOutlineClose>:<BiMenu></BiMenu>
            }
            </div>
           </div>
            <div className={`md:mt-0 transition-all z-10  right-12 px-2 bg-white  absolute md:static ${open?'top-16':'top-[-200px]'}`}>
                {link}
            </div>
            <div className='md:flex justify-end'>
            <div>
            <button><BiSolidUserCircle className='h-7 w-7 mx-3'></BiSolidUserCircle></button>
            </div>
            <div className='hidden md:block'>
                <h1>User Name</h1>
            </div>
            </div>
        </div>

    );
};

export default Navbar;