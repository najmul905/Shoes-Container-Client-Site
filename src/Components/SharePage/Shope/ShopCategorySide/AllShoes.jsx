import { useState } from 'react';
import useAllProducts from '../../../CoustomHooks/useAllProducts';

const AllShoes = () => {
    // use to State for create a pageData
    const [currenPage,setCurrentPage]= useState(1)
    // Fetch data use to Tanstack query
    const [isPending,all_products]=useAllProducts()
    console.log(all_products)
    if(isPending){
        return <div className='flex h-full items-center justify-center'><progress className="progress w-56"></progress></div>
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
            <div  className='grid grid-cols-4'>
            {
                perPageProductsData?.map(data=><div key={data._id}>
                      <p><small>Name:{data.Name} and id{data._id}</small></p>
                    <img className='h-48 w-48 bg-slate-900' src={data.Image} alt="" />
                </div>)
            }
        </div>
        <div className=' flex gap-2 my-5' >
            {
                pages?.map((page,index)=><div className='' key={index}>
                    <button  onClick={()=>setCurrentPage(page)} className='bg-slate-400 rounded-md px-2'>{page}</button>
                </div>)
            }
        </div>
        </div>
    );
};

export default AllShoes;