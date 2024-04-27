import React, { } from 'react';
// import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import { useQuery } from "@tanstack/react-query";


const AllUser = () => {
    // const {user}=useContext(AuthContext)
    const{isPending,data:users}=useQuery({
        queryKey:["users"],
        queryFn: async()=>{
            const response= await fetch("http://localhost:5000/user")
            return response.json()
        }
    })
    if (isPending){
        return <div className='flex h-full items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
    }
    console.log(users)
    return (
        <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
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
      {/* row 2 */}
   
      {/* row 4 */}
      
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
        </div>
    );
};

export default AllUser;