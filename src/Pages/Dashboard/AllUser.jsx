import React, { } from 'react';
import useUser from '../../Components/CoustomHooks/useUser';



const AllUser = () => {
   const[users,isPending]=useUser()

    if (isPending){
        return <div className='flex h-screen items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
    }
    console.log(users)
    return (
        <div>
          <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {users?.map((user,index)=>
     <tr key={index}>  
        <td>
          <div className="">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
         <p>{user?.name}</p>
        </td>
        <td><p>{user?.email}</p></td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
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