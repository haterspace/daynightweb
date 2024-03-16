import axios from 'axios';

const apiService = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export default apiService;
