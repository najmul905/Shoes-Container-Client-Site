import React, { useContext, useState } from 'react';
import useJustForYou from '../../Components/CoustomHooks/useJustForYou';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';

const ManegeJustForYOu = () => {
    const{image_hosting_url}=useContext(AuthContext)
    const [forYou,isPending,refetch]=useJustForYou()
    const[jusYou,setForYou]=useState({})
    const id=jusYou._id
    const { register, handleSubmit, reset } = useForm()
    
        const onSubmit=(data)=>{
            console.log(id)
            const Name=data.Name
            const Price=data.Price
            const Description=data.Description
            const image=data.Image
            const formData=new FormData()
            formData.append('image',image[0])
            fetch(image_hosting_url,{
                method: "POST",
                body: formData
            })
            .then(res=>res.json())
            .then(ImageUrl=>{
                console.log(ImageUrl)
                if(ImageUrl.success){
                    const Url=ImageUrl.data.display_url
                    const UpdateData={Name,Price,Description,Image:Url}
                    
                    fetch(`http://localhost:5000/just_for_customer/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(UpdateData)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.modifiedCount>0){
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Successfully Edited",
                                showConfirmButton: false,
                                timer: 1500
                              });
                              refetch()
                              reset() 
                        }
                        if(data.modifiedCount==0){
                            Swal.fire({
                                position: "top-end",
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong! Your work is not success",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }
                   });      
                }      
            })       
        }
    
    if (isPending){
        return <div className='flex h-screen items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
    }

    return (
        <div>
          <div className='text-[10px] md:text-[16px]'>
          {forYou?.map((data,index)=><div key={index}>
            <div className='flex items-center mt-4 gap-4  bg-slate-200 rounded border-2 hover:shadow-2xl'>
                <img className='md:h-[200px] md:w-[220px] md:p-8 rounded h-[100px] w-[110px] p-2' src={data.Image} alt="" />
                <div className='py-2'>
                    <p>Name: {data.Name}</p>
                    <p>Price: ${data.Price}</p>
                    <p>Details: {data.Description}</p>
                    <hr className='bg-white border-2' />
                    <div className='flex items-center gap-2 md:gap-6 md:mt-4'>
                       <Link onClick={() => document.getElementById('my_modal_3').showModal()}> <button onClick={()=>setForYou(data)} className='text-white font-semibold rounded px-2 bg-[#6d605e]'>Edit</button></Link>
                        <button className='text-white font-semibold rounded px-2 bg-[#FF6347]'>Delete</button>
                    </div>
                </div>
            </div>
          </div>)}
          <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className='' action="">
                                <h1 className='font-bold text-center my-2'>Edit Offer Products</h1>
                                <div>
                                    <label className="label">
                                        <span className=" font-semibold">Name</span>
                                    </label>
                                    <input {...register("Name")} type="text" defaultValue={jusYou.Name} className=" w-full p-2 border-2 border-slate-700 rounded" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className=" font-semibold">Price</span>
                                    </label>
                                    <input {...register("Price")} type="text" defaultValue={jusYou.Price} className=" w-full p-2 border-2 border-slate-700 rounded" />
                                </div>
                              
                                <div>
                                    <label className="label">
                                        <span className=" font-semibold">Details</span>
                                    </label>
                                    <textarea {...register("Description")} defaultValue={jusYou.Description} className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                                </div>
                                <div className=' text-center my-5'>
                                    <input {...register('Image')} type="file"  className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                                </div>
                                <div className='text-center'>
                                    <button  className='text-white font-semibold rounded-xl px-4 py-2 border-b-8  border-[#247a96] active:border-[#97f903] duration-300 bg-[#6d605e]' >Edit Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
        </div>
        </div>
    );
};

export default ManegeJustForYOu;