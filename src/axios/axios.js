import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000',
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {}
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
