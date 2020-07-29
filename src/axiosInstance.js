import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh';
 

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/"
});


// Function that will be called to refresh authorization
const refreshAuthLogic = failedRequest => {
    const refreshPayload = { "refresh": localStorage.getItem("refresh") }
    return (axios.post('http://localhost:8000/api/token/refresh/', refreshPayload)
        .then(response => {
            localStorage.setItem('access', response.data.access);
            failedRequest.response.config.headers['Authorization'] = 'Bearer ' + response.data.access;
            return Promise.resolve();
        }));
}

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic);


export default axiosInstance;