import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ShopMainSide = () => {
    const { category } = useParams();
    const [currenPage,setCurrentPage]= useState(1)

    const { data: categories, isPending } = useQuery({
        queryKey: ["category", category], 
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/all_products/${category}`);
            return res.json();
        }
    });

    if (isPending){
        return <div className='flex h-full items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
    }

   
   const postPerPage=8

    const lastPostIndex=currenPage*postPerPage
    const FirstPageIndex=lastPostIndex-postPerPage
    const perPageProductsData=categories.slice(FirstPageIndex,lastPostIndex)
    // console.log(perPageProductsData)

    // create a page Number
    let pages=[]
    for(let i = 1; i<= Math.ceil(categories.length/postPerPage); i++){
        pages.push(i)
    }

    return (      
            <div>
                <div className='grid grid-cols-4 gap-2 mt-[78px] '>
               {
                perPageProductsData?.map(data=><div className='' key={data._id}>
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

export default ShopMainSide;
