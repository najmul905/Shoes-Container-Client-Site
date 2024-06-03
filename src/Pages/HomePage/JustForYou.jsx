import React, { useContext, useState } from 'react';
import useJustForYou from '../../Components/CoustomHooks/useJustForYou';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import useCard from '../../Components/CoustomHooks/useCard';
import Swal from 'sweetalert2'
import { Parallax } from 'react-parallax';

const JustForYou = () => {
    const{user}=useContext(AuthContext)
    const [card,refetch]=useCard()
    const [forYou, isPending] = useJustForYou()
    const [data, setData] = useState({})
    // console.log(data)
    const handelAddToCard=data=>{
        if(user&&user.email){
           const {Name,Image,_id,Price,Details}=data
           const cardData={Name,Image,itemId:_id,Price,Details,Email:user.email}
            fetch(`https://shoes-container-server.vercel.app/card`,{
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

    if (isPending) {
        return (
          <div className='flex h-screen items-center justify-center'>
            <span className='loading loading-spinner loading-md'></span>
          </div>
        );
      }
    return (
        <div className='my-6 px-5'>
            <div>
            <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={('https://i.ibb.co/0hMGr9s/Green-and-Yellow-Simple-Clean-Shoes-Sale-Banner-2-1.jpg')}
        bgImageAlt="the dog"
        strength={-200}
        className='h-[30vh] md:w-[70%] md:mx-auto '
    >
        
        <h1  className="hero-content text-center text-3xl Font-bold  text-white">Just For You</h1>

    </Parallax>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2'>
                {
                    forYou?.map((data, index) => <div  className='hover:shadow-2xl cursor-pointer my-4 rounded-md bg-white' key={index}>
                        <div onClick={() => setData(data)}>
                            <img className='h-40 md:h-52 xl:h-72 w-full' src={data.Image} alt="" />
                            <div className='my-2 px-2'>
                                <p className='text-[12px] md:text-[15px]'>Name: {data.Name}</p>
                                <p className='text-[12px] md:text-[15px]'>Price: ${data.Price}</p>
                                <p className='my-2 text-[12px] md:text-[15px] text-justify line-clamp-2'>Description: {data.Description}</p>
                                <hr className='border-black border-2' />
                                <div className='flex items-center justify-around mx-2 md:mx-4 my-2 md:my-4'>
                                        <button onClick={()=>handelAddToCard(data)} className='border-0 text-[8px] md:text-[15px] border-b-[#bb903f] px-2 rounded font-semibold hover:bg-[#bb903f] hover:text-white border-b-4 active:bg-white active:text-slate-600'>
                                            Add to Card
                                        </button >
                                        <button onClick={() => document.getElementById(`my_modal_3`).showModal()} className='border-0 text-[8px] md:text-[15px] border-b-[#bb903f] px-2 rounded font-semibold hover:bg-[#bb903f] hover:text-white border-b-4 active:bg-white active:text-slate-600'>Se Details</button>
                                    </div>
                            </div>
                        </div>
                    </div>)
                }
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            <img className='rounded-xl' src={data.Image} alt="" />
                            <div className='p-3'>
                                <p>Name: {data?.Name}</p>
                                <p>Price: ${data?.Price}</p>
                                <hr className='border-2 border-black' />
                                <p>Details: {data?.Description}</p>
                            </div>
                           
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default JustForYou;