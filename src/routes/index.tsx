import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { Home } from "@/components/Home";
import { Login } from "@/components/Login";
import { Register } from "@/components/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
