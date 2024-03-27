import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className=''>  
    <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};

export default App;