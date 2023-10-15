import React from "react";
import Root from "./routes/Navbar";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./layout/Main";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Dashboard from "./layout/Dashboard";
import User from "./routes/User";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    // children:[

    //   {
    //        path: "/user",
    //        element: <User/>,
    //   },

    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
