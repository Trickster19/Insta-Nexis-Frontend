import {api} from "./api";


const fetchAllProducts= async(username:string)=>{


    const {data}= await api.get(`/api/userProducts/${username}`);
        
    return data
}

export {fetchAllProducts}