import { useState } from 'react';
import useAllProducts from '../../../CoustomHooks/useAllProducts';

const AllShoes = () => {
    // use to State for create a pageData
    const [currenPage,setCurrentPage]= useState(1)
    // Fetch data use to Tanstack query
    const [isPending,all_products]=useAllProducts()
    console.log(all_products)
    if(isPending){
        return <div className='flex h-full items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
    }
    
    
//    const [postPerPage,setPostPerPage]= useState(12)
   const postPerPage=12

    const lastPostIndex=currenPage*postPerPage
    const FirstPageIndex=lastPostIndex-postPerPage
    const perPageProductsData=all_products.slice(FirstPageIndex,lastPostIndex)
    // console.log(perPageProductsData)

    // create a page Number
    let pages=[]
    for(let i = 1; i<= Math.ceil(all_products.length/postPerPage); i++){
        pages.push(i)
    }
console.log(pages)
    return (
        <div>
            <div  className='grid grid-cols-4 gap-2 my-8'>
            {
                perPageProductsData?.map(data=><div key={data._id}>
                     <div className='text-sm hover:shadow-2xl hover:border-2 rounded cursor-pointer'>
                    <img className='h-60 w-full bg-slate-900' src={data.Image} alt="" />
                    <div className='ps-2'>
                        <p>Name: {data.Name}</p>
                        <p>Price: {data.Price}</p>
                        <p className='truncate'>Details: {data.Details}</p>
                        <hr className='border-black border-2' />
                    </div>
                    <div className='text-center '>
                    <button className='my-4 font-bold bg-[#bb903f] px-3 py-1 text-white hover:text-slate-700 rounded-md text-center'>Add to Card</button>
                    </div>
                     </div>
                </div>)
            }
        </div>
       <div>
       <div className=' flex items-center justify-center  my-5 ' >
            {
                pages?.map((page,index)=><div className='menu' key={index}>
                   <li><button  onClick={()=>setCurrentPage(page)} className='bg-slate-500 rounded-md font-bold text-white'>{page}</button></li>
                </div>)
            }
        </div>
       </div>
        </div>
    );
};

export default AllShoes;