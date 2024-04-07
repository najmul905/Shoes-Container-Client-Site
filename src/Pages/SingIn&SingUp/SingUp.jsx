import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import { useNavigate,useLocation} from 'react-router-dom';


const SingUp = () => {
const {createUser,updateUserProfile}=useContext(AuthContext)
const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.form?.pathname || '/'

const image_hosting_url= "https://api.imgbb.com/1/upload?expiration=600&key=0ed7f8057d2b60c5218d2cd5efac50bf"

    const{handleSubmit,register}=useForm()
    const onSubmit = data=>{
      const name=data.Name;
      const image=data.Image;
      const email=data.Email;
      const password=data.Password;
      const formData=new FormData();
      formData.append('image',image[0])
      fetch(image_hosting_url,{
        method:'POST',
        body:formData
      })
      .then(res=>res.json())
      .then(imageUrl=>{
        if(imageUrl.success){
          const Image=imageUrl.data.display_url
          console.log(Image)
          createUser(email,password)
          .then(res=>{
            const user=res.user
            console.log(user)
            updateUserProfile(name,Image)
            .then(res=>{
              console.log(res.user)
              navigate(from,{replace:true})
            })
            .catch(err=>console.log(err.message))
          })
          .catch(err=>console.log(err.message))
        }
      })
      
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