import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { Home } from "@/components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "login", element: <div> Login</div> },
      { path: "register", element: <div> Register</div> },
    ],
  },
]);
