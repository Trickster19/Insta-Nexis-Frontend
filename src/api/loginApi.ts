import { api } from "./api";


const loginApi = async ( username: string, password: string ) => {
    try {
      const { data } = await api.post('/auth/login', {username:username,password:password}); // Adjust API endpoint as needed

      if(data.success===false) throw new Error(data.message)
      return data.data.accessToken; // Assuming the API returns the JWT token
    } catch (error) {
        console.log("Error ",error)
      throw new Error('Invalid credentials or server error');
    }
  };

export default loginApi