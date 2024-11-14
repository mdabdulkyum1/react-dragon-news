import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/router";
import AuthProvider from "./AuthProvider/AuthProvider";


import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
