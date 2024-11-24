import { useMutation } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import { DecodedJWT, loginInterface } from "@/utils/Interfaces";
import { jwtDecode } from "jwt-decode";
import useAuth from "@/store";
import loginApi from "@/api/loginApi";
import { toast } from "sonner";
import { useSessionDetails } from "@/store/store";

// Define the type of the decoded JWT token

// Function to handle the login request

export const useLogin = (redirect?: boolean) => {
  const navigate = useNavigate();
  const { setAccessToken, setUserName } = useAuth((state) => state);
  const { setSessionDetails } = useSessionDetails((state) => state);

  const mutation = useMutation({
    mutationFn: (credentials: loginInterface) =>
      loginApi(credentials.username, credentials.password),
    onSuccess: (token: string, credentials: loginInterface) => {
      try {
        // Decode the JWT token
        const decoded: DecodedJWT = jwtDecode(token);

        setAccessToken(token);
        setSessionDetails(credentials);
        setUserName(decoded.sub);
        toast.success("User Login Successful");

        if (redirect == undefined || redirect === null || redirect === true)
          navigate("/profile");
      } catch (error) {
        toast.error("Some Error Occurred, Please Try Again");
        console.error("Error occurred:", error);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
      console.error("Login failed:", error.message);
    },
  });

  return mutation;
};
