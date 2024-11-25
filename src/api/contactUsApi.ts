/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContactInterface } from "@/utils/Interfaces";
import { api } from "./api";

const contactUsApi = async (contactInfo: ContactInterface) => {
  try {
    const { data } = await api.post("/mail/contactUs", contactInfo);
    return data.success;
  } catch (error: any) {
    if (
      (error.response && error.response.status === 401) ||
      error.response.status === 400
    ) {
      throw new Error(error.response.data.message || "Unauthorized access");
    }
    console.log("Error ", error);
    throw new Error("An Unexpected Error Occured");
  }
};

export default contactUsApi;
