import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from './contexts/AuthContext/AuthContextProvider';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Layout } from './components/layouts/mainLayout/Layout';
import { Home } from './pages/home/Home';
import { Courses } from './pages/courses/Courses';
import { Contacts } from './pages/contacts/Contacts';
import { NotFound } from './pages/notFound/NotFount';
import { Login } from './pages/login/Login';
import { Registration } from './pages/registration/Registration';
import { UserList } from './pages/UserList/UserList';
import { UserDetails } from './pages/dettagliUtente/UserDetails';

const router = createBrowserRouter([
    {
        element: <AuthContextProvider><Layout /></AuthContextProvider>,
        children: [
            {
                path: "/",
                children: [
                    {
                        path: "",
                        element: <Home />
                    },
                    {
                        path: "login",
                        children:[
                            {
                                path:"",
                                element: <Login />
                            },
                            {
                                path:"userDetails",
                                element: <UserDetails/>
                            },                            
                            {
                                path:"userList",
                                element: <UserList />
                            }

                        ]
                        
                    },
                    {
                        path: "registration",
                        element: <Registration />
                    },
                    {
                        path: "courses/",
                        children: [
                            {
                                path: "",
                                element: <ProtectedRoute> <Courses /></ProtectedRoute>
                            }
                        ]
                    },
                    {
                        path: "contacts",
                        element: <Contacts />
                    },
                    {
                        path: "*",
                        element: <NotFound />
                    }
                ]
            }
        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
