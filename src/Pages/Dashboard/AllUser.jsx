import React, { useState } from 'react';
import useUser from '../../Components/CoustomHooks/useUser';



const AllUser = () => {
   const[users,isPending]=useUser()
   const [data,setData]=useState({})
   console.log(data)

    if (isPending){
        return <div className='flex h-screen items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
    }
   
    return (
        <div >
          <div className="">
  <table className="md:table">
    <thead>
      <tr className='bg-slate-700 text-white md:text-[15px] text-[10px]'>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Details/Delete</th>
      </tr>
    </thead>
    <tbody className='bg-slate-200 '>
     {users?.map((user,index)=>
     <tr onClick={()=>setData(user)} className='md:text-[15px] text-[10px]'  key={index}>  
        <td>
          <div className="">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img className='' src={user?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
         <p className='text-ellipsis'>{user?.name}</p>
        </td>
        <td><p className='text-ellipsis'>{user?.email}</p></td>
        <td><p>status</p><br /> <button className='btn btn-ghost btn-xs md:text-[15px] text-[10px]'>Make Admin</button></td>
        <th>
          <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-ghost btn-xs md:text-[15px] text-[10px] bg-green-500 text-white">details</button><br /><button className="btn btn-ghost btn-xs md:text-[15px] text-[10px] bg-red-700 text-white">Delete User</button>
        </th>
      </tr>
     )}   
    </tbody>
  </table>
  <dialog id="my_modal_3" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className='flex gap-6 items-center justify-center'>
      <img className='rounded' src={data.image} alt="" />
      <div>
        <h1 className='text-2xl font-semibold'>Name: {data.name}</h1>
        <h1  className='text-2xl font-semibold'>Email: {data.email}</h1>
      </div>
    </div>
  </div>
</dialog>
</div>
        </div>
    );
};

export default AllUser;