import { createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Layout from "@/components/Layout";
import AuthLayout from "@/components/Layout/Auth";
import ProtectedRoute from "@/components/ProtectedRoute";

// Lazy load components
const Home = lazy(() => import("@/components/Home"));
const Login = lazy(() => import("@/components/Login"));
const Register = lazy(() => import("@/components/Register"));
const Profile = lazy(() => import("@/components/Profile"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={<div className="text-center">Loading Home...</div>}
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <Suspense
            fallback={<div className="text-center">Loading Profile...</div>}
          >
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: (
          <Suspense
            fallback={<div className="text-center">Loading Login...</div>}
          >
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense
            fallback={<div className="text-center">Loading Register...</div>}
          >
            <Register />
          </Suspense>
        ),
      },
    ],
  },
]);
