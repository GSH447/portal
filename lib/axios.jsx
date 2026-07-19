import axios from 'axios';
import { API_BASE_URL } from './api';

// const axiosInstance = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   timeout: 10000, // Optional: timeout after 10s
// });

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 100000, // Optional: timeout after 30s
  withCredentials: true, // ✅ This enables sending cookies (session ID)
});
  

// Optional: global response interceptors
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
