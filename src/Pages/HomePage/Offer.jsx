import React, { useEffect, useState } from 'react';

const Offer = () => {
    const [offers, setOffers] = useState([])
    const [offerData, setOfferData] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/offer')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    console.log(offerData)
    return (
        <div className='my-6 px-5'>
            <h1 className='md:text-2xl font-semibold text-slate-500'>Offer</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2'>
                {
                    offers.map(offer =>
                        <div onClick={() => document.getElementById(`my_modal_4`).showModal()} className={`my-3 border bg-white rounded hover:shadow-2xl cursor-pointer relative`} key={offer._Id}>
                            <div onClick={() => setOfferData(offer)}>
                                <header>
                                    <img src={offer.Image} alt="" />
                                </header>
                                <div className='p-2 truncate'>
                                    <p className='text-[12px] md:text-[15px]'>Name: {offer.Name}</p>
                                    <div className='flex items-center'>
                                        <p className='md:text-[15px] text-[12px] font-semibold mr-2'>Price:</p>
                                        <div>
                                            <p className='line-through text-[12px]'>${offer.Price}</p>
                                            <p className='text-red-600 text-[12px] font-semibold'>${(offer.Price - offer.Price * offer.DiscountPercentage / 100).toFixed(2)}</p>
                                        </div>
                                    </div>

                                    <h1 className='absolute top-0 right-0 bg-black text-white m-1 px-2 rounded text-[10px] md:text-[12px] lg:text-[15px]'>Offer: {offer.DiscountPercentage}%</h1>
                                    <hr className='border-black' />
                                    <h1 className='truncate text-[12px] md:text-[16px]'>{offer.Description}</h1>
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
                            <img className='rounded-xl' src={offerData.Image} alt="" />
                            <div className='p-3'>
                                <p>Name: {offerData.Name}</p>
                                <div className='flex items-center'>
                                    <p className='md:text-[15px] text-[12px] font-semibold mr-2'>Price:</p>
                                    <div>
                                        <p className='line-through text-[12px]'>${offerData.Price}</p>
                                        <p className='text-red-600 text-[12px] font-semibold'>${(offerData.Price - offerData.Price * offerData.DiscountPercentage / 100).toFixed(2)}</p>
                                    </div>
                                </div>
                                <hr className='border-2 border-black' />
                                <p>Details: {offerData.Description}</p>
                            </div>
                            <div className='text-center'>
                                <button className='px-2 text-white bg-lime-600 rounded-xl'>Add to Card</button>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Offer;