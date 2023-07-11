import axios from "axios";

const axiosInstance = axios.create({
    baseURL : import.meta.env.VITE_BASE_URL
})

axiosInstance.interceptors.response.use( config => {

    config.request = {
        ...config.headers,
        'x-token' : localStorage.getItem('x-token')
    }

    return config;
} )


export default axiosInstance;