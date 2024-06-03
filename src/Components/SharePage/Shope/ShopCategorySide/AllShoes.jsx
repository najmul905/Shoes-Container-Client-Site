import { useContext, useState } from 'react';
import useAllProducts from '../../../CoustomHooks/useAllProducts';
import useCard from '../../../CoustomHooks/useCard';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const AllShoes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [all_products, isPending] = useAllProducts();
  const [card, refetch] = useCard();
  const { user } = useContext(AuthContext);

  if (isPending) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <span className='loading loading-spinner loading-md'></span>
      </div>
    );
  }

  const postPerPage = 12;
  const lastPostIndex = currentPage * postPerPage;
  const FirstPageIndex = lastPostIndex - postPerPage;
  const perPageProductsData = all_products?.slice(FirstPageIndex, lastPostIndex);

  const pages = [];
  for (let i = 1; i <= Math.ceil(all_products.length / postPerPage); i++) {
    pages.push(i);
  }

  const handelAddToCard = (data) => {
    if (user && user.email) {
      const { Name, Image, _id, Price, Details } = data;
      const cardData = { Name, Image, itemId: _id, Price, Details, Email: user.email };
      fetch(`https://shoes-container-server.vercel.app/card`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(cardData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Successfully Add to Card',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-[78px] mb-8'>
        {perPageProductsData?.map((data) => (
          <div key={data._id}>
            <div className='text-sm hover:shadow-2xl hover:border-2  rounded cursor-pointer'>
              <img className='h-60 w-full bg-slate-900' src={data.Image} alt='' />
              <div className='ps-2'>
                <p>Name: {data.Name}</p>
                <p>Price: {data.Price}</p>
                <p className='truncate'>Details: {data.Details}</p>
                <hr className='border-black border-2' />
              </div>
              <div className='text-center'>
                <button
                  onClick={() => handelAddToCard(data)}
                  className=' border-0 text-[8px] md:text-[15px] border-b-[#bb903f] px-2 rounded font-semibold hover:bg-[#bb903f] hover:text-white border-b-4 active:bg-white active:text-slate-600 my-4'
                >
                  Add to Card
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className='flex items-center justify-center my-5'>
          {pages.map((page, index) => (
            <div className='' key={index}>
              <button
                onClick={() => setCurrentPage(page)}
                className={` border px-2 ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } border border-slate-500`}
              >
                {page}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllShoes;
