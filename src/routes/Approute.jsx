import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Auth from '../Layout/Auth';
import Login from '../page/Login';
import Register from '../page/Register';
import Main from '../Layout/Main';
import Protectrouted from '../context/Protectrouted';
import Card from '../page/Card';
import About from '../page/About';
import  Home  from '../page/Home';
import Navbar from '../components/Navbar';
const Approute = () => {
  const router =  createBrowserRouter([
    {
      path:"/",
      element:<Auth/>,
      children:([
        {
          path:"",
          element:<Login/>
        },
        {
              path:"register",
              element:<Register/>,
        },
      ])
    },
{
  path: "/main",
  element: <Protectrouted />,
  children: [
    {
      element: <Main/>,
      children: [
        {
         path:"",
          element: <Home />,
        },
        {
          path: "about/:id",
          element: <About />,
        },
        {
          path: "card",
          element: <Card />,
        },
      ],
    },
  ],
},

    {
    
    },

  ]);
  return <RouterProvider router={router}/>
   
  
}

export default Approute
