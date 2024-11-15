import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../layout/Root";
import Home from './../pages/Home';
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsCart from "../components/NewsCart/NewsCart";
import About from "../pages/About";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import SingleNews from "../pages/SingleNews/SingleNews";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            children: [
              {
                path: "",
                element: <Navigate to="category/01"></Navigate>
              },
              {
                path: "category/:id",
                element: <NewsCart></NewsCart>,
                loader: ({ params })=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
              }
            ]
        }, 
        {
          path: "news/:id",
          element: <PrivateRoute><SingleNews></SingleNews></PrivateRoute>,
          loader: ({ params })=> {
           return fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
          }
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "about",
          element: <About></About>
        },
        {
          path: "profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: "*",
          element: <ErrorPage />
        }
      ]
    },
  ]);