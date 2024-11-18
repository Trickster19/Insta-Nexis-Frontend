import useAuth from "@/store";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  authenticationRequired: boolean;
}
export const ProtectedRoute = ({ children, authenticationRequired }: Props) => {
  const accessToken = useAuth((state) => state.accessToken);
  const navigate = useNavigate();
  const isAuth = useAuth((state) => state.isAuth);
  const setIsAuth = useAuth((state) => state.setIsAuth);
  useEffect(() => {
    if (authenticationRequired && accessToken === null) {
      navigate("/login", { replace: true });
    } else if (!authenticationRequired && accessToken) {
      navigate("/", { replace: true });
    } else {
      setIsAuth(true); // User is authorized
    }

    return () => {
      setIsAuth(false);
    };
  }, [accessToken, authenticationRequired, navigate]);

  return !isAuth ? <div>Loading ...</div> : <>{children}</>;
};
