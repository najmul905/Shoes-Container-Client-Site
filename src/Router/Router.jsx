
import {createBrowserRouter, } from "react-router-dom"
import App from '../App';

import Error from "../ErrorPage/Error";
import Home from "../Pages/HomePage/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
    {
      path:'*',
      element:<Error></Error>    }
  ]);