import React from 'react';
import Image1 from "/BannerImage/shoes banner1.png"
import Image2 from "./../../../public/BannerImage/shoes banner2.png"
import { motion } from "framer-motion";

import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='md:h-screen h-60 bg-gradient-to-r flex items-center justify-center from-cyan-400 from-10% to-emerald-400 to-90%'>
            <div className='flex items-center  md:mx-28'>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 2, }}
                    className='flex-auto w-[25%]'><img className='h-[200hv]' src={Image1} alt="" /></motion.div>
                <div className='flex-auto text-white w-[50%] text-center   rounded-lg  '>
                    <div>
                        <motion.h1
                            initial={{ y: -30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 2 }}
                            style={{ fontFamily: 'Croissant One' }} className=' md:text-3xl tracking-wider font-extrabold md:font-bold'>You Favorite Shoes is here</motion.h1>
                        <motion.p
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 2 }}
                            style={{ fontFamily: 'Croissant' }}>If you Want to Bye...</motion.p>
                        <motion.p
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 2 }}
                            style={{ fontFamily: 'Croissant' }}>You can Bye from here</motion.p>
                        <div className='flex items-center justify-center text-white my-2'> <FaArrowDown></FaArrowDown></div>
                        <Link to="/shope"><motion.button
                            initial={{ y: 30, opacity: 0.3 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", duration: 2 }}
                            className=' bg-gradient-to-r  from-cyan-400 from-10% to-emerald-400 to-90% shadow-slate-900 px-4 py-1 rounded-xl border-b-4 font-medium active:border-b-indigo-400 duration-300  active:'>Shop Here</motion.button></Link>
                    </div>
                </div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", duration: 2, }}
                    className='flex-auto w-[25%]'><img className='h-[200hv]' src={Image2} alt="" /></motion.div>
            </div>
        </div>
    );
};

export default Banner;