import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';


const SingUp = () => {
  const { createUser, updateUserProfile,image_hosting_url } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.form?.pathname || '/'


  const { handleSubmit, register,reset } = useForm()
  const onSubmit = data => {
    const name = data.Name;
    const image = data.Image;
    const email = data.Email;
    const password = data.Password;
    const formData = new FormData();
    formData.append('image', image[0])
    fetch(image_hosting_url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imageUrl => {
        if (imageUrl.success) {
          const Image = imageUrl.data.display_url
          const users = { name: name, image: image, email: email }
          console.log(users)
          fetch('http://localhost:5000/user', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(users)
          })
            .then(res => res.json())
            .then(data => console.log(data))
          createUser(email, password)
            .then(res => {
              const user = res.user
              console.log(user)
              updateUserProfile(name, Image)
                .then(res => {
                  console.log(res.user)
                  reset()
                })
                .catch(err => console.log(err.message))
            })
            .catch(err => console.log(err.message))
        }
        navigate(from, { replace: true })
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
            <input type="password" {...register("Password")} placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input type="file" {...register("Image")} required placeholder='Image' className="file-input file-input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control mt-6">
            <button  className="btn btn-primary">SingUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;