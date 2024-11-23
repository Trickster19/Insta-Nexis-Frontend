import { useMutation } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";

import { UserInfo } from "@/utils/Interfaces";

import registerApi from "@/api/registerApi";
import { toast } from "sonner";
// Define the type of the decoded JWT token

// Function to handle the login request

export const UseRegister = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (credentials: UserInfo) => registerApi(credentials),
    onSuccess: (success: boolean) => {
      console.log("registration success", success);
      if (success) {
        toast.success("User Register Successfully !!!");
        navigate("/login");
      } else {
        toast.error("Unable to Register User");
      }
    },
    onError: (error: Error) => {
      console.error("registration failed:", error.message);
      toast.error(error.message);
    },
  });

  return mutation;
};
