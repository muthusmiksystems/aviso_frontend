import axios from "axios";
const baseUrl = 'http://127.0.0.1:3210/api'
// const baseUrl = 'http://aviso.canadacentral.cloudapp.azure.com:3210/api'


// Create an Axios instance with default options
const axiosInstance = axios.create({
    baseURL: baseUrl,
});

export default axiosInstance;



