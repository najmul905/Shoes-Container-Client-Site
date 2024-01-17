
import {createBrowserRouter, } from "react-router-dom"
import App from '../App';
// import Home from "../Pages/Home/Home";
import Error from "../ErrorPage/Error";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      children:[
        // {
        //     path:"/",
        //     element:<Home></Home>
        // }
      ]
    },
    {
      path:'*',
      element:<Error></Error>    }
  ]);