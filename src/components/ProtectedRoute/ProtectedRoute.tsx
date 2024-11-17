import useAuth from "@/store";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  authenticationRequired: Boolean;
}
export const ProtectedRoute = ({ children, authenticationRequired }: Props) => {
  const accesstoken = useAuth((state) => state.accessToken);

  if (!authenticationRequired && accesstoken) return <Navigate to="/" />;

  if (authenticationRequired && accesstoken === null)
    return <Navigate to="/login" />;

  return <>{children}</>;
};
