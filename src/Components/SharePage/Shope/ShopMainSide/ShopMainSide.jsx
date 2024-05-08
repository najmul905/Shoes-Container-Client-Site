import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import useCard from '../../../CoustomHooks/useCard';

const ShopMainSide = () => {
    const {user}=useContext(AuthContext)
    const { category } = useParams();
    const [currenPage,setCurrentPage]= useState(1)
    const [card,refetch]=useCard()
 

    const { data: categories, isPending } = useQuery({
        queryKey: ["category", category], 
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/all_products/${category}`);
            return res.json();
        }
    });

    if (isPending){
        return <div className='flex h-screen items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
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

    // handel add to card
    const handelAddToCard=data=>{
        if(user&&user.email){
           const {Name,Image,_id,Price,Details}=data
           const cardData={Name,Image,itemId:_id,Price,Details,Email:user.email}
            fetch(`http://localhost:5000/card`,{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(cardData)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged){
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Add to Card",
                        showConfirmButton: false,
                        timer: 1500
                      });
                     
                }
            })
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        
       
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
                        <button onClick={()=>handelAddToCard(data)} className=' border-0 text-[8px] md:text-[15px] border-b-[#bb903f] px-2 rounded font-semibold hover:bg-[#bb903f] hover:text-white border-b-4 active:bg-white active:text-slate-600 my-4'>Add to Card</button>
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
