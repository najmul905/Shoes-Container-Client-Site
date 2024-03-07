import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Offer from './Offer';
import JustForYou from './JustForYOu';


const Home = () => {
    return (
        <div className='bg-slate-50'>
           <Banner></Banner>
           <Category></Category>
           <Offer></Offer>
          <JustForYou></JustForYou>
        </div>
    );
};

export default Home;