import { useMutation } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import { DecodedJWT, loginInterface } from "@/utils/Interfaces";
import { jwtDecode } from "jwt-decode";
import useAuth from "@/store";
import loginApi from "@/api/loginApi";
import { toast } from "sonner";
// Define the type of the decoded JWT token

// Function to handle the login request

export const useLogin = () => {
  const navigate = useNavigate();
  const { setAccessToken, setUserName } = useAuth((state) => state);

  const mutation = useMutation({
    mutationFn: (credentials: loginInterface) =>
      loginApi(credentials.username, credentials.password),
    onSuccess: (token: string) => {
      try {
        // Decode the JWT token
        const decoded: DecodedJWT = jwtDecode(token);

        setAccessToken(token);
        setUserName(decoded.sub);
        toast.success("User Login Successful");
        // Redirect to the profile page
        navigate("/profile");
      } catch (error) {
        toast.error("Some Error Occured, Please Try Again ");
        console.error("Error occured:", error);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
      console.error("Login failed:", error.message);
    },
  });

  return mutation;
};
