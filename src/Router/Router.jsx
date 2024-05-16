
import {createBrowserRouter, } from "react-router-dom"
import App from '../App';

import Error from "../ErrorPage/Error";
import Home from "../Pages/HomePage/Home";
import Shope from "../Pages/Shope/Shope";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Card from "../Pages/Card/Card";
import ShopMainSide from "../Components/SharePage/Shope/ShopMainSide/ShopMainSide";
import AllShoes from "../Components/SharePage/Shope/ShopCategorySide/AllShoes";
import AllUser from "../Pages/Dashboard/AllUser";
import AddProducts from "../Pages/Dashboard/AddProducts";
import ManageAllProducts from "../Pages/Dashboard/ManageAllProducts";
import ManegeJustForYOu from "../Pages/Dashboard/ManegeJustForYOu";
import ManegeOffer from "../Pages/Dashboard/ManegeOffer";
import SingIn from "../Pages/SingIn&SingUp/SingIN";
import SingUp from "../Pages/SingIn&SingUp/SingUp";
import PrivetRouter from "./PrivetRouter";
import AdminHome from "../Pages/Dashboard/AdminHome";
import Payment from "../Pages/Card/Payment";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"shope",
          element:<PrivetRouter><Shope></Shope></PrivetRouter>,
          children:[
            {
              path:"/shope",
              element:<AllShoes></AllShoes>
            },
            {
              path:"shopMainSide/:category",
              element:<ShopMainSide></ShopMainSide>
            }
          ]
        },
        
        {
          path:"card",
          element:<Card></Card>
        },
        {
          path:"payment",
          element:<Payment></Payment>
        },
        
      ]
    },
    {
      path:'*',
      element:<Error></Error>    },
     
      {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children:[
          {
           path:"/dashboard",
           element:<AdminHome></AdminHome>
          },
          {
            path:"dashboard/all_user",
            element:<AllUser></AllUser>
          },
          {
            path:"dashboard/add_products",
            element:<AddProducts></AddProducts>
          },
          {
            path:"dashboard/manege_all_products",
            element:<ManageAllProducts></ManageAllProducts>
          },
          {
            path:"dashboard/manege_just_for_you",
            element:<ManegeJustForYOu></ManegeJustForYOu>
          },
          {
            path:"dashboard/manege_offer",
            element:<ManegeOffer></ManegeOffer>
          }

        ]
      },
      {
        path:"singIn",
        element:<SingIn></SingIn>
      },
      {
        path:"singUp",
        element:<SingUp></SingUp>
      }

  ]);