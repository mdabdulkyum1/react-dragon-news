import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from './../pages/Home';
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);