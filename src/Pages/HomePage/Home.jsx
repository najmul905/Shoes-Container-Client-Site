import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Offer from './Offer';
import JustForYou from './JustForYou';



const Home = () => {
    return (
        <div className='bg-slate-50'>
           <Banner></Banner>
           <Category></Category>
           <div className='md:px-16 mx-8'>
           <Offer></Offer>
          <JustForYou></JustForYou>
           </div>
        </div>
    );
};

export default Home;