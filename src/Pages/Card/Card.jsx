import React from 'react';
import useCard from '../../Components/CoustomHooks/useCard';
import Swal from 'sweetalert2'


const Card = () => {
    const [card,refetch,isPending]=useCard()
    const dataLength=card?.length
    console.log(dataLength)
    const totalAmount = (card || []).reduce((sum, item) => sum + parseFloat(item.Price || 0), 0).toFixed(2);
    const Price=totalAmount

    console.log(totalAmount)
   
    if (isPending){
        return <div className='flex h-screen items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
    }
    // HandelDelete
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
                fetch(`http://localhost:5000/card/data/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
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
    return (
        <div className='h-screen md:flex justify-center gap-6'>
            
            <div className="overflow-x-auto mt-20">
  <table className="table">
    <thead>
      <tr className='bg-slate-700 text-white md:text-[15px] text-[10px]'>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody className='bg-slate-200 '>
     {card?.map((data,index)=>
     <tr className='md:text-[15px] text-[10px]'  key={index}>  
        <td>
          <div className="">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data?.Image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
         <p>{data?.Name}</p>
        </td>
        <td><p>${data?.Price}</p></td>
        <th>
          <button onClick={()=>handelDelete(data._id)} className="btn btn-ghost btn-xs md:text-[15px] text-[10px]">Delete</button>
        </th>
      </tr>
     )}   
    </tbody>
  </table>
</div>
       <div className='mt-5 md:mt-20 text-center md:h-40 '>
        <div className='bg-slate-300 p-5 text-center rounded-md'>
        <h1 className='text-3xl font-bold my-10'>Your Added Products</h1>
        <h1 className=''><span className='text-[20px] font-bold'>Total Products:</span> <span className='text-[22px] text-red-700 font-semibold'>{card?.length}</span></h1>
        <p><span className='text-[20px] font-bold'>Amount:</span> <span className='text-[22px] text-red-700 font-semibold'>${totalAmount}</span></p>
        <div className='mx-auto my-10'>
            <button className=' border-0 text-[8px] md:text-[15px] border-b-[#bb903f] px-2 rounded font-semibold hover:bg-[#bb903f] hover:text-white border-b-4 active:bg-white active:text-slate-600'>Pye Now</button>
        </div>
        </div>
       </div>
        </div>
    );
};

export default Card;