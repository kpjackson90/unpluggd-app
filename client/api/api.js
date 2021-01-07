import axios from 'axios';

let instance;

if ( typeof window === "undefined") {
    instance = axios.create({
        baseURL: 'http://localhost:5000'
    });
} else {
    instance = axios.create({
        baseURL: "/"
    });
};

instance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

instance.interceptors.request.use(
    (response) => response,
    (error) => {
        console.log('----Error', error);
        return Promise.reject(error);
    }
);

export default instance;