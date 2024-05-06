import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from './components/layouts/mainLayout/Layout';
import { Home } from './components/pages/home/Home';
import { Courses } from './components/pages/courses/Courses';
import { NotFound } from './components/pages/notFound/NotFount';

const router = createBrowserRouter([
  {
      element: <Layout/>,
      children:[
          {        
              path: "/",
              children: [
                  {
                      path: "",
                      element: <Home/>
                  },
                  {
                     path: "courses/",
                     children: [
                      {
                          path: "",
                          element: <Courses/>
                      }
                     ]
                  },
                  {
                      path:"*",
                      element: <NotFound/>
                  }
              ]
          }
      ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>  
)
