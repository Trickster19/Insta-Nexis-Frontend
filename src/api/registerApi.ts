
import { UserInfo } from "@/utils/Interfaces";
import { api } from "./api";



const registerApi = async ( userInfo:UserInfo) => {
    try {
      const { data } = await api.post('/auth/registerdummy', userInfo); // Adjust API endpoint as needed

        console.log(data);
      return data.data.success; // Assuming the API returns the JWT token
    } catch (error) {
        console.log("Error ",error)
      throw new Error('Invalid credentials or server error');
    }
  };

export default registerApi