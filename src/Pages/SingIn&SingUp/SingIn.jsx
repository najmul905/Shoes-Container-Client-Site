import React from 'react';
import { useForm } from 'react-hook-form';

const SingIn = () => {

// const handelSingIn=(event)=>{
// event.preventDefault();
// const form=event.target;
// const email=form.email.value;
// const password=form.password.value;
// console.log(email,password)


// }

const{handleSubmit,register}=useForm()
const onSubmit= data =>{
    console.log(data.Email)
}



    return (
        <div className='h-screen flex items-center justify-center gap-40'>
           <div><img className='h-80 rounded' src="https://i.postimg.cc/hvX7fxby/762-7628121-cartoon-writing-png-writing-cartoon-clipart-pen-transparent.png" alt="" /></div>
           <div>
             {/* form */}
           
            <form onSubmit={handleSubmit(onSubmit)} className="card-body shadow-2xl rounded">
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
           </div>
        </div>
    );
};

export default SingIn;