import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
// import './SliderStyle.css'
const Category = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/banner_category')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div className='my-6 px-5'>
      <h1 className='text-2xl font-semibold text-slate-500'>Categories</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper" >
        {
          categories.map((category,index) => <SwiperSlide key={index}>
            <Link to={`/shope/shopMainSide/${category.Category}`}>
            <motion.div
              className='border bg-white rounded hover:shadow-2xl cursor-pointer my-3'>
              <header>
                <img className='rounded h-[90px] md:h-[140px] w-full' src={category.image} alt="" />
              </header>
              <div className='p-2'>
                <h1 className='text-[10px] md:text-[15px] text-center font-semibold'>{category.Category}</h1>
              </div>
            </motion.div>
            </Link>
          </SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default Category;