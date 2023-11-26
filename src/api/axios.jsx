import axios from 'axios';

export default axios.create({
    baseURL: 'http://172.16.6.32:8080'
});