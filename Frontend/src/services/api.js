import axios from 'axios';

// Axios instance with base URL
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to add token to headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
