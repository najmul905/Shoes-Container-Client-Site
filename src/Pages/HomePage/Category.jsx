import React, { useEffect, useState } from 'react';

const Category = () => {

const [categories,setCategories]=useState([])

useEffect(()=>{
    fetch('Categories.json')
    .then(res=>res.json())
    .then(data=>setCategories(data))
},[])
console.log(categories)
    return (
        <div className='my-6 px-5'>
            <h1 className='text-2xl font-semibold text-slate-500'>Categories</h1>
            <div className='grid grid-cols-5 gap-3 '>
                {
                    categories.map(category=><div key={category._id}>
                        <div className='border border-spacing-2 rounded shadow-2xl   my-3'>
                            <header>
                            <img className='rounded' src={category.image} alt="" />
                            </header>
                      <div className='p-2'>
                      <div className='flex items-center justify-between mt-3'>
                        <h1 className='text-[2vw,2vh] '>{category.Category}</h1>
                        <p className='text-[2vw,2vh]'>{category.Name}</p>
                       </div>
                        < hr className='w-[70%] mx-auto my-2 ' />
                        <div>
                        <p className='text-[2vw 2vh]'>{category.description}</p>
                        <h1 className='text-[2vw 2vh]'>Price: ${category.price}</h1>
                        </div>
                      </div>
                        </div>
                       
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;