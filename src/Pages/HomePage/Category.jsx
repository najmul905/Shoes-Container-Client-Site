import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
const Category = () => {

const [categories,setCategories]=useState([])

useEffect(()=>{
    fetch('Categories.json')
    .then(res=>res.json())
    .then(data=>setCategories(data))
},[])
// console.log(categories)
    return (
        <div className='my-6 px-5'>
            <h1 className='text-2xl font-semibold text-slate-500'>Categories</h1>
            <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-3 '>
                {
                    categories.map(category=><div key={category._id}>
                        <motion.div
                        
                        className='border border-spacing-2 rounded shadow-2xl   my-3'>
                            <header>
                            <img className='rounded' src={category.image} alt="" />
                            </header>
                      <div className='p-2'>
                      <div className='flex items-center justify-between mt-3'>
                        <h1 className='text-[15px] '>{category.Category}</h1>
                        <p className='text-[15px] '>{category.Name}</p>
                       </div>
                        < hr className='w-[100%] mx-auto my-2 border-stone-950' />
                        <div>
                        <h1 className='text-[15px]'>Price: <span className='text-red-600'>${category.price}</span></h1>
                        <p className='text-sm '>{category.description}</p>
                        </div>
                      </div>
                        </motion.div>
                       
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;