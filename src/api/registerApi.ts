/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserInfo } from "@/utils/Interfaces";
import { api } from "./api";

const registerApi = async (userInfo: UserInfo) => {
  try {
    const { data } = await api.post("/auth/registerDummy", userInfo); // Adjust API endpoint as needed

    return data.success; // Assuming the API returns the JWT token
  } catch (error: any) {
    if (
      (error.response && error.response.status === 409) ||
      error.response.status === 400
    ) {
      throw new Error(error.response.data.message || "Unauthorized access");
    }
    console.log("Error ", error);
    throw new Error("An Unexpected Error Occured");
  }
};

export default registerApi;
