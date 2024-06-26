import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const SingIn = () => {
  const { logIn, googleLogIn,loading } = useContext(AuthContext)
  // 
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.form?.pathname || '/'
 
const[error,setError]=useState('')
console.log(error)
  const { handleSubmit, register } = useForm()
  const onSubmit = data => {
    const email = data.Email
    const password = data.Password
    // console.log(email,password)
    logIn(email, password)
      .then(res => {
        const user = res.user;
        navigate(from, { replace: true })
        console.log(user)
      })
      .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage)
      })
  }
  const LogInWithGoogle = () => {
    googleLogIn()
      .then(res => {
        const user = res.user
        // console.log(user)
        if(res.user){
          navigate(from, { replace: true })
        }
        const status="User"
        const users = { name: user.displayName, email: user.email, image: user.photoURL,status}
        // console.log(users)
        fetch("https://shoes-container-server.vercel.app/user",{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(users)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.acknowledged){
            navigate(from, { replace: true })
          } })
      })
      .catch(error => {
        const errorMessage = error.message
        console.log(errorMessage)
        
      })
  }


  return (
    <div className='h-screen flex items-center justify-center gap-40'>
      <div className='hidden md:block'><img className='h-80 rounded' src="https://i.postimg.cc/hvX7fxby/762-7628121-cartoon-writing-png-writing-cartoon-clipart-pen-transparent.png" alt="" /></div>
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
            <input type="password" {...register("Password")} placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button disabled={loading} className="btn btn-primary"> {loading ? 'Loading...' : 'Login'}</button>
          </div>
          <div className='mx-auto'>
            <button onClick={LogInWithGoogle} className='flex items-center justify-center rounded px-3 py-1 gap-2 bg-zinc-700 font-semibold text-white'><span><FaGoogle></FaGoogle></span> LogIn with Google</button>
          </div>
          <div className='text-center'>
            <p>If you are new</p>
            <Link className='text-green-500 font-semibold underline' to='/SingUp'>create a new account</Link>
          </div>
        </form>
        <div>
          {error&&<p className='text-red-600 font-semibold p-4 text-center'>Invalid Account</p>}
        </div>
      </div>

    </div>
  );
};

export default SingIn;