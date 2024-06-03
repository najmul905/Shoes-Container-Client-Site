import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const AddProducts = () => {
    const { image_hosting_url } = useContext(AuthContext)

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        const Name = data.Name
        const Price = data.Price
        const Category = data.Category
        const Image = data.Image
        const Details = data.Details
        const formData = new FormData()
        formData.append('image', Image[0])
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageUrl => {
                if (imageUrl.success) {
                    // console.log(imageUrl)
                    const url = imageUrl.data.display_url
                    // console.log(url)
                    const item = { Name, Image: url, Price, Category, Details }
                    console.log(item)
                    fetch("https://shoes-container-server.vercel.app/all_products", {
                        method: "POST",
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(item)
                    })
                    .then(res => res.json())
                    .then(itemData => {
                        console.log(itemData)
                        if(itemData.acknowledged){
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                              });
                              reset()
                        }
                    })
                    .catch(error => console.log(error))
                }
            })
            .catch(error => console.log(error))
        
    }


    return (
        <div className='bg-slate-200 p-8 rounded-xl'>
            <p className='text-2xl font-bold my-4 text-center '>Add Products</p>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <div className='flex items-center justify-center gap-4 my-5'>
                    <div>
                        <label className="label">
                            <span className=" font-semibold">Name</span>
                        </label>
                        <input {...register("Name")} type="text" placeholder="Type here shoes Name" className=" w-full p-2 border-2 border-slate-700 rounded" />
                    </div>
                    <div>
                        <label className="label">
                            <span className=" font-semibold">Price</span>
                        </label>
                        <input {...register("Price")} type="text" placeholder="Type here shoes Price" className=" w-full p-2 border-2 border-slate-700 rounded" />
                    </div>
                </div>
                <div className='flex items-center justify-center gap-4 my-5'>
                    <div>
                        <label className="label">
                            <span className=" font-semibold">Category</span>
                        </label>
                        <select {...register("Category")} className=" w-full p-2 border-2 border-slate-700 rounded">
                            <option disabled value="Default" selected>Select Category</option>
                            <option>Men Sneaker</option>
                            <option>Men Loafer</option>
                            <option>Men Flip Flop</option>
                            <option>Sport Boots</option>
                            <option>Men Slipper</option>
                            <option>High Heel</option>
                            <option>Low Heel</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            <span className=" font-semibold">Details</span>
                        </label>
                        <textarea {...register("Details")} placeholder="Type here shoes Details" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                    </div>
                </div>
                <div className=' text-center my-5'>
                    <input {...register('Image')} type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                </div>
                <div className='text-center'>
                    <button className='my-4 font-bold bg-[#bb903f] px-3 py-1  hover:text-slate-700 rounded-md text-center'>Add Products</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;
