import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/taskify/',
});

const accessToken = localStorage.getItem('accessToken');

instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

export default instance;
