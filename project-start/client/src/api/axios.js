import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8055",
  timeout: 5000,
  headers: {}
});

export default instance;
