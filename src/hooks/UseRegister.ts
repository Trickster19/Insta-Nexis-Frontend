import { useMutation } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";

import { UserInfo } from "@/utils/Interfaces";

import registerApi from "@/api/registerApi";
// Define the type of the decoded JWT token

// Function to handle the login request

export const UseRegister = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (credentials: UserInfo) => registerApi(credentials),
    onSuccess: (success: boolean) => {
      console.log("registration success", success);
      if (success) navigate("/login");
    },
    onError: (error: Error) => {
      console.error("registration failed:", error.message);
    },
  });

  return mutation;
};
