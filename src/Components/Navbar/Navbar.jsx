import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidUserCircle } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
const{user,logOut}=useContext(AuthContext)
console.log(user)

            const [open, setOpen] = useState(false)
const handelLogOut=()=>{
logOut()
.then((data)=>{console.log(data)})
.catch(error=>console.log(error.message))
}


    const link = <>
        <ul className='md:flex md:items-center'>
            <li><Link to='/' className=' my-12 font-semibold  hover:text-gray-400 duration-500'>Home</Link></li>
            <li><Link to='/shope' className='md:ml-8 font-semibold  hover:text-gray-400 duration-500'>Shope</Link></li>
            <li><Link to='/dashboard' className='md:ml-8 font-semibold  hover:text-gray-400 duration-500' >Dashboard</Link></li>
            <li><Link to='/card' className='flex items-center font-semibold md:ml-8  hover:text-gray-400 duration-500'><div className='relative'><div className='flex items-center'>Card<FaCartShopping></FaCartShopping></div>
            <h1 className='absolute -top-3 text-[10px] -right-6 bg-red-400 p-2 h-7 w-7 font-semibold text-white rounded-full'>12</h1>
               </div></Link></li>
        </ul> </>
    return (
       <div className=''>
         <div className='mt-0 flex justify-between z-10 bg-opacity-50 bg-black fixed w-full md:px-10 px-2 py-4'>
            <div className='flex items-center'>
                <Link to='/'><button className='flex items-center text-white'><p className='text-3px bg-opacity-100' style={{ fontFamily: 'Croissant One' }}>Shoes Container  </p> <img className='h-5 w-5 md:h-7 md:w-7 rounded-3xl' src="/Shoity Cosmetics.png" alt="" /></button></Link>
                <div onClick={() => setOpen(!open)} className='text-2xl text-white right-12 px-2   absolute md:static md:hidden'>
                    {open ? <AiOutlineClose></AiOutlineClose> : <BiMenu></BiMenu>
                    }
                </div>
            </div>
            <div className={`md:mt-0 transition-all z-10 text-white    right-12 px-2  absolute md:static ${open ? 'top-16' : 'top-[-200px]'}`}>
                {link}
            </div>
            <div className='md:flex items-center gap-2 justify-end'>
                <div>
                   {user? <img  className='h-10 w-10 rounded-[100%]' src={user.photoURL} alt="" />:<BiSolidUserCircle className='h-10 w-10 mx-3 text-white'></BiSolidUserCircle>}
                </div>
                <div className='hidden md:block'>
                    {user? <button className='font-bold bg-[#bb903f] px-3 py-1 text-white hover:text-slate-700 rounded-md text-center' onClick={handelLogOut}>LogOut</button>:<Link to='/singIn'><button className='font-bold bg-[#bb903f] px-3 py-1 text-white hover:text-slate-700 rounded-md text-center' >LogIn</button></Link>}
                </div>
            </div>
        </div>
       </div>

    );
};

export default Navbar;