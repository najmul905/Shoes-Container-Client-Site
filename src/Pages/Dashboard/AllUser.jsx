import React, { } from 'react';
import useUser from '../../Components/CoustomHooks/useUser';



const AllUser = () => {
   const[users,isPending]=useUser()

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
        <th>Details</th>
      </tr>
    </thead>
    <tbody className='bg-slate-200 '>
     {users?.map((user,index)=>
     <tr className='md:text-[15px] text-[10px]'  key={index}>  
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
        <th>
          <button className="btn btn-ghost btn-xs md:text-[15px] text-[10px]">details</button>
        </th>
      </tr>
     )}   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;