/* eslint-disable import/no-cycle */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_HOSTNAME,
  headers: {
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = process.env.VUE_APP_TOKEN_KEY;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;