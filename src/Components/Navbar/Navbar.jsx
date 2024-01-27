import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidUserCircle } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {

    const link=<>
    <ul className='md:flex md:items-center'>
        <li><Link  to='/' className=' my-12 font-semibold text-white hover:text-gray-400 duration-500'>Home</Link></li>
        <li><Link to='/shope' className='md:ml-8 font-semibold text-white hover:text-gray-400 duration-500'>Shope</Link></li>
        <li><Link to='/dashboard' className='md:ml-8 font-semibold text-white hover:text-gray-400 duration-500' >Dashboard</Link></li>
        <li><Link to='/card'  className='flex items-center font-semibold md:ml-8 text-white hover:text-gray-400 duration-500'>Card<FaCartShopping></FaCartShopping></Link></li>
    </ul>
    </>
const [open,setOpen]=useState(false)

    return (
        <div className=' flex justify-between bg-gradient-to-r  from-cyan-400 from-10% to-emerald-400 to-90%  md:px-10 px-2 py-4 '>
           <div className='flex items-center'>
           <Link to='/'><button className='flex items-center text-white'><h1 style={{fontFamily:'Croissant One'}}>Shoes Container  </h1> <img className='h-7 w-7 rounded-3xl' src="/Shoity Cosmetics.png" alt="" /></button></Link>
            <div onClick={()=>setOpen(!open)} className='text-2xl text-white right-12 px-2   absolute md:static md:hidden'>
            {open? <AiOutlineClose></AiOutlineClose>:<BiMenu></BiMenu>
            }
            </div>
           </div>
            <div className={`md:mt-0 transition-all z-10 text-white  right-12 px-2  absolute md:static ${open?'top-16':'top-[-200px]'}`}>
                {link}
            </div>
            <div className='md:flex justify-end'>
            <div>
            <button><BiSolidUserCircle className='h-7 w-7 mx-3 text-white'></BiSolidUserCircle></button>
            </div>
            <div className='hidden md:block'>
                <h1>User Name</h1>
            </div>
            </div>
        </div>

    );
};

export default Navbar;