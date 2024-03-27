
import {createBrowserRouter, } from "react-router-dom"
import App from '../App';

// import Error from "../ErrorPage/Error";
import Home from "../Pages/HomePage/Home";
import Shope from "../Pages/Shope/Shope";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Card from "../Pages/Card/Card";
import ShopMainSide from "../Components/SharePage/Shope/ShopMainSide/ShopMainSide";
import AllShoes from "../Components/SharePage/Shope/ShopCategorySide/AllShoes";

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
          element:<Shope></Shope>,
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
          path:"dashboard",
          element:<Dashboard></Dashboard>
        },
        {
          path:"card",
          element:<Card></Card>
        },
        
      ]
    },
    // {
    //   path:'*',
    //   element:<Error></Error>    }
  ]);