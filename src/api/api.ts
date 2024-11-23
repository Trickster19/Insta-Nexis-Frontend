
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});


console.log(import.meta.env.VITE_SERVER_URL)

export { api};
