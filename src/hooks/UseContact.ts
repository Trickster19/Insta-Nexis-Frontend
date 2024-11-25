import { contactUsApi } from "@/api";
import { ContactInterface } from "@/utils/Interfaces";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useContact = () => {
  const mutation = useMutation({
    mutationFn: (contactInterface: ContactInterface) =>
      contactUsApi(contactInterface),
    onSuccess: () => {
      try {
        toast.success("Message Sent Successfully");
      } catch (error) {
        toast.error("Some Error Occurred, Please Try Again");
        console.error("Error occurred:", error);
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
      console.error(error.message);
    },
  });

  return mutation;
};
