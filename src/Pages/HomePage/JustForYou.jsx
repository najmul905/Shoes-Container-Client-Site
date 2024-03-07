import React, { useEffect, useState } from 'react';

const JustForYou = () => {
    const[forYou,setForYou]=useState([])
    const [data,setData]=useState({})
    console.log(data)
    useEffect(()=>{
        fetch('JustForYou.json')
        .then(res=>res.json())
        .then(data=>setForYou(data))
    },[])
   
    return (
        <div className='my-6 px-5'>
            <h1 className='text-2xl font-semibold text-slate-500'>Just For You</h1>\
            <div className='grid md:grid-cols-4 lg:gird-cols-5 gap-2 grid-cols-3'>
                {
forYou?.map(data=><div  onClick={()=>document.getElementById(`my_modal_3`).showModal()} className='hover:shadow-2xl cursor-pointer my-4 rounded-md' key={data._Id}>
    <div onClick={()=>setData(data)}>
    <img src={data.Image} alt="" />
    <div className='my-2 px-2'>
<p className='text-[12px] md:text-[15px]'>Name: {data.Name}</p>
<p className='text-[12px] md:text-[15px]'>Price: ${data.Price}</p>
<hr className='border-black border-2' />
<p className='my-2 text-[12px] md:text-[15px] truncate'>Description: {data.Description}</p>
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

export default JustForYou;