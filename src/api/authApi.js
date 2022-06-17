import axios from 'axios';
import axiosClient from './axiosClient';

const api = {
  register(data) {
    const url = `https://api.ezfrontend.com/auth/local/register/`;
    return axios.post(url, data);
  },
  login(data) {
    const url = `https://api.ezfrontend.com/auth/local/`;
    return axios.post(url, data);
  },
};
export default api;
