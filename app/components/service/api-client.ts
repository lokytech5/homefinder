import axios from 'axios'
import { config } from 'process'

const apiClient = axios.create({
    baseURL: 'http://localhost:5001/api'
});

const authApiClient = axios.create({
    baseURL: 'http://localhost:5001/api'
});

const userApiClient = axios.create({
    baseURL: 'http://localhost:5001/api'
});

authApiClient.interceptors.request.use((config) => {
    let token;

    const userType = localStorage.getItem('userType'); // Assuming you store user type in localStorage

    if (userType === 'User') {
        token = localStorage.getItem('userToken');
    } else if (userType === 'Agent') {
        token = localStorage.getItem('agentToken');
    }

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

userApiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('userToken');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export { apiClient, authApiClient, userApiClient };