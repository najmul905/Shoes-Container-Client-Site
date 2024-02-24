import React, { useEffect, useState } from 'react';

const Offer = () => {
    const [offers,setOffers]=useState([])
    useEffect(()=>{
        fetch('Discount.json')
        .then(res=>res.json())
        .then(data=>setOffers(data))
    },[])
    console.log(offers)
    return (
        <div className='my-6 px-5'>
            <h1 className='text-2xl font-semibold text-slate-500'>Offer</h1>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {
                    offers.map(offer=>
                     <div className='my-3 border border-spacing-2 rounded shadow-2xl relative' key={offer._Id}>
                        <header>
                            <img src={offer.Image} alt="" />
                        </header>
                        <div className='p-2'>
                            <h1>Name: {offer.Name}</h1>
                            <h1>Selling Price: <span className='line-through'>{offer.Price}</span></h1>
                            <h1 className='absolute top-0 right-0 bg-black text-white m-1 px-2 rounded'>Offer: {offer.DiscountPercentage}%</h1>
                            <hr className='border-black' />
                            <h1>Discount Price: {(offer.Price-offer.Price*offer.DiscountPercentage/100).toFixed(2) }</h1>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Offer;