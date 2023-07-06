import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./views/Login/Login.jsx";
import Home from "./views/Home/Home.jsx";
import Products from "./views/Products/Products.jsx";
import Pay from "./views/Pay/Pay.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Products/:productId",
    element: <Products />,
  },
  {
    path: "/pay/:payId",
    element: <Pay />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
