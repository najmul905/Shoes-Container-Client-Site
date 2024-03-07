import React, { useEffect, useState } from 'react';

const Offer = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('Discount.json')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    console.log(offers)
    return (
        <div className='my-6 px-5'>
            <h1 className='text-2xl font-semibold text-slate-500'>Offer</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2'>
                {
                    offers.map(offer =>
                        <div className={`my-3 border bg-white rounded hover:shadow-2xl cursor-pointer relative`} key={offer._Id}>
                            <header>
                                <img src={offer.Image} alt="" />
                            </header>
                            <div className='p-2 truncate'>
                                <h1 className='text-[12px] md:text-[15px]'>Name: {offer.Name}</h1>
                                <div className='flex items-center'>
                                    <p className='md:text-[15px] text-[12px] font-semibold mr-2'>Price:</p>
                                    <div>
                                        <h1 className='line-through text-[12px]'>${offer.Price}</h1>
                                        <h1 className='text-red-600 text-[12px] font-semibold'>${(offer.Price - offer.Price * offer.DiscountPercentage / 100).toFixed(2)}</h1>
                                    </div>
                                </div>

                                <h1 className='absolute top-0 right-0 bg-black text-white m-1 px-2 rounded text-[10px] md:text-[12px] lg:text-[15px]'>Offer: {offer.DiscountPercentage}%</h1>
                                <hr className='border-black' />
                                <h1 className='truncate text-[12px] md:text-[16px]'>{offer.Description}</h1>
                                
                            </div>

                        </div>)
                }
            </div>
        </div>
    );
};

export default Offer;