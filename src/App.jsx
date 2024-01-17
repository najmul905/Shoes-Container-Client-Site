import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Outlet></Outlet>
    </div>
  );
};

export default App;