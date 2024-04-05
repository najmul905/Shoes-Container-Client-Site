import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';

const SingIn = () => {
const {SingIn}=useContext(AuthContext)
const{handleSubmit,register}=useForm()
const onSubmit= data =>{
    const email=data.Email
    const password=data.Password
    SingIn(email,password)
    .then(res=>{
      const user=res.user;
      console.log(user)
    })
    .catch(error=>{
      const errorMessage=error.message;
      console.log(errorMessage)
    })
    console.log(email,password)   
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
        <div className='text-center'>
            <p>If you are new</p>
            <Link className='text-green-500 font-semibold underline' to='/SingUp'>create a new account</Link>
           </div>
      </form>
           </div>
          
        </div>
    );
};

export default SingIn;