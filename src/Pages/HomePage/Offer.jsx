import React, {useContext, useState } from 'react';
import useOfferProducts from '../../Components/CoustomHooks/useOfferProduc';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import useCard from '../../Components/CoustomHooks/useCard';
import Swal from 'sweetalert2'
import { Parallax, Background } from 'react-parallax';

const Offer = () => {
    const {user}=useContext(AuthContext)
    const [card,refetch]=useCard()
    const [offers,isPending] =useOfferProducts()
    const [offerData, setOfferData] = useState({})
   console.log(offers,isPending)
   const handelAddToCard=data=>{
    if(user&&user.email){
       const {Name,Image,_id,Price,Details,DiscountPercentage}=data
       const offerPrice=(Price-Price*DiscountPercentage/100).toFixed(2)
       console.log(offerData)
       const cardData={Name,Image,itemId:_id,Price:offerPrice,Details,Email:user.email}
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
    
   
  if (isPending) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <span className='loading loading-spinner loading-md'></span>
      </div>
    );
  }
}
    return (
        <div className='my-6 px-5'>
            <div>
            <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={('https://i.ibb.co/kqJzPB3/Green-and-Yellow-Simple-Clean-Shoes-Sale-Banner-1.jpg')}
        bgImageAlt="the dog"
        strength={-200}
        className='h-[30vh] md:w-[70%] md:mx-auto'
    >
        
        <h1  className="hero-content text-center text-3xl Font-bold  text-white">Offer</h1>

    </Parallax>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2'>
                {
                    offers?.map((offer,index) =>
                        <div key={index}  className={`my-3 border bg-white rounded hover:shadow-2xl cursor-pointer relative`} >
                            <div onClick={() => setOfferData(offer)}>
                                <header>
                                    <img className='h-40 md:h-52 xl:h-72 w-full' src={offer.Image} alt="" />
                                </header>
                                <div className='p-2 '>
                                    <p className='text-[12px] md:text-[15px]'>Name: {offer.Name}</p>
                                    <div className='flex items-center'>
                                        <p className='md:text-[15px] text-[12px] font-semibold mr-2'>Price:</p>
                                        <div>
                                            <p className='line-through text-[12px]'>${offer.Price}</p>
                                            <p className='text-red-600 text-[12px] font-semibold'>${(offer.Price - offer.Price * offer.DiscountPercentage / 100).toFixed(2)}</p>
                                        </div>
                                    </div>

                                    <h1 className='absolute top-0 right-0 bg-opacity-30 bg-black text-white m-1 px-2 rounded text-[10px] md:text-[12px] lg:text-[15px]'>Offer: {offer.DiscountPercentage}%</h1>
                                    <h1 className='line-clamp-2 text-[12px] md:text-[16px]'>{offer.Description}</h1>
                                    <hr className='border-black' />
                                    <div className='flex items-center justify-around mx-2 md:mx-4 my-2 md:my-4'>
                                        <button onClick={()=>handelAddToCard(offer)} className=' border-0 text-[8px] md:text-[15px] border-b-[#bb903f] px-2 rounded font-semibold hover:bg-[#bb903f] hover:text-white border-b-4 active:bg-white active:text-slate-600'>
                                            Add to Card
                                        </button >
                                        <button onClick={() => document.getElementById(`my_modal_4`).showModal()} className=' border-0 text-[8px] md:text-[15px] border-b-[#bb903f] px-2 rounded font-semibold hover:bg-[#bb903f] hover:text-white border-b-4 active:bg-white active:text-slate-600'>Se Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            <img className='rounded-xl h-72 w-full' src={offerData.Image} alt="" />
                            <div className='p-3'>
                                <p>Name: {offerData.Name}</p>
                                <div className='flex items-center'>
                                    <p className='md:text-[15px] text-[12px] font-semibold mr-2'>Price:</p>
                                    <div>
                                        <p className='line-through text-[12px]'>${offerData.Price}</p>
                                        <p className='text-red-600 text-[12px] font-semibold'>${(offerData.Price - offerData.Price * offerData.DiscountPercentage / 100).toFixed(2)}</p>
                                    </div>
                                </div>
                                <hr className='border-2  border-black' />
                                <p>Details: {offerData.Description}</p>
                            </div>
                            
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Offer;