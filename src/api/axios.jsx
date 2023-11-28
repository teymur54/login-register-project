import axios from 'axios';
const BASE_URL = 'http://10.14.33.78:8080';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-type':'application/json'},
    withCredentials: true
});