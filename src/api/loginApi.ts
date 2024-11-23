/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "./api";

const loginApi = async (username: string, password: string) => {
  try {
    const { data } = await api.post("/auth/login", {
      username: username,
      password: password,
    }); // Adjust API endpoint as needed

    if (data.success === false) throw new Error(data.message);
    return data.data.accessToken; // Assuming the API returns the JWT token
  } catch (error: any) {
    if (
      (error.response && error.response.status === 401) ||
      error.response.status === 403
    ) {
      throw new Error(error.response.data.message || "Unauthorized access");
    }

    console.log("Error: ", error);
    throw new Error("An Unexpected Error Occured");
  }
};

export default loginApi;
