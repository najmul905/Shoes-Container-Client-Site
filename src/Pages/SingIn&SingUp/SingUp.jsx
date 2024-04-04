import React from 'react';
import { useForm } from 'react-hook-form';

const SingUp = () => {


    const{handleSubmit,register}=useForm()
    const onSubmit = data=>{
        console.log(data)
    }
    return (
        <div className='flex items-center justify-center h-screen gap-40'>
         <div><img className='h-80 rounded' src="https://i.postimg.cc/hvX7fxby/762-7628121-cartoon-writing-png-writing-cartoon-clipart-pen-transparent.png" alt="" /></div>
         <div>
         <form onSubmit={handleSubmit(onSubmit)} className="card-body shadow-2xl rounded">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name"  {...register("Name")} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"  {...register("Email")} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("Password")}  placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="file" {...register("Image")} required placeholder='Image'  className="file-input file-input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SingUp</button>
        </div>
      </form>
         </div>
        </div>
    );
};

export default SingUp;