import React from 'react';
import Banner from './Banner';
import Category from './Category';
import MostPopular from './MostPopular';
import Offer from './Offer';

const Home = () => {
    return (
        <div className=''>
           <Banner></Banner>
           <Category></Category>
           <MostPopular></MostPopular>
           <Offer></Offer>
        </div>
    );
};

export default Home;