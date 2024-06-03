import React, { useContext, useState } from 'react';
import useUser from '../../Components/CoustomHooks/useUser';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';



const AllUser = () => {
   const[users,isPending,refetch]=useUser()
   const [data,setData]=useState({})
   const{user,DeleteUser}=useContext(AuthContext)

    if (isPending){
        return <div className='flex h-screen items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
    }

    const handelDelete=(id)=>{
      const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
              fetch(`https://shoes-container-server.vercel.app/user/${id}`,{
          method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.deletedCount>0){
              swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                DeleteUser(user)
                refetch()
          }
      })
            
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error"
            });
          }
        });
      
  }
   const handelAdmin=(id)=>{
    const status="Admin"
    const data={status}
    fetch(`https://shoes-container-server.vercel.app/user/${id}`,{
      method:"PATCH",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Edited",
          showConfirmButton: false,
          timer: 1500
        });
      }
      refetch()
    })
   }
   const handelChangeAdminRoll=(id)=>{
    const status="User"
    const data={status}
    fetch(`https://shoes-container-server.vercel.app/user/${id}`,{
      method:"PATCH",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Edited",
          showConfirmButton: false,
          timer: 1500
        });
      }
      refetch()
    })

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
        <td><p>status: <span className='font-bold'>{user?.status}</span></p><br /> {user?.status=="Admin"?<button onClick={()=>handelChangeAdminRoll(user?._id)} className='btn btn-ghost btn-xs md:text-[15px] text-[10px]'>Change Admin-Roll</button>:<button onClick={()=>handelAdmin(user?._id)} className='btn btn-ghost btn-xs md:text-[15px] text-[10px]'>Make Admin</button>}</td>
        <th>
          <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-ghost btn-xs  text-[10px] bg-green-500 text-white">details</button><br /><button onClick={()=>handelDelete(user._id)} className="btn btn-ghost btn-xs text-[10px] bg-red-700 mt-2 text-white">Delete User</button>
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