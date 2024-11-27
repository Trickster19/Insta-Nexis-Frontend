import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "@/components/Layout";
import AuthLayout from "@/components/Layout/Auth";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Loader2 } from "lucide-react";

// Lazy load components
const Home = lazy(() => import("@/components/Home"));
const Login = lazy(() => import("@/components/Login"));
const Register = lazy(() => import("@/components/Register"));
const Profile = lazy(() => import("@/components/Profile"));
const Product = lazy(() => import("@/components/Product"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center ">
            <Loader2
              className=" w-28 h-28 animate-spin "
              style={{
                color: "#f57c00",
              }}
            />
          </div>
        }
      >
        {" "}
        <Layout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <div className="flex h-screen items-center justify-center ">
                <Loader2
                  className=" w-28 h-28 animate-spin "
                  style={{
                    color: "#f57c00",
                  }}
                />
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute authenticationRequired={true}>
            <Suspense
              fallback={
                <div className="flex h-screen items-center justify-center ">
                  <Loader2
                    className=" w-28 h-28 animate-spin "
                    style={{
                      color: "#f57c00",
                    }}
                  />
                </div>
              }
            >
              <Profile />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "product/:id",
        element: (
          <ProtectedRoute authenticationRequired={true}>
            <Suspense
              fallback={
                <div className="flex h-screen items-center justify-center ">
                  <Loader2
                    className=" w-28 h-28 animate-spin "
                    style={{
                      color: "#f57c00",
                    }}
                  />
                </div>
              }
            >
              <Product />
            </Suspense>
          </ProtectedRoute>
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
          <ProtectedRoute authenticationRequired={false}>
            <Suspense
              fallback={
                <div className="flex h-screen items-center justify-center ">
                  <Loader2
                    className=" w-28 h-28 animate-spin "
                    style={{
                      color: "#f57c00",
                    }}
                  />
                </div>
              }
            >
              <Login />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: "register",
        element: (
          <ProtectedRoute authenticationRequired={false}>
            <Suspense
              fallback={
                <div className="flex h-screen items-center justify-center ">
                  <Loader2
                    className=" w-28 h-28 animate-spin "
                    style={{
                      color: "#f57c00",
                    }}
                  />
                </div>
              }
            >
              <Register />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
