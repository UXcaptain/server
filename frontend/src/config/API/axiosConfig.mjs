import axios from 'axios'
import posthog from 'posthog-js'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    timeout: 10000, // 10 seconds
    headers: {'Content-Type': 'application/json'}
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            posthog.reset();
            window.location.href = '/auth/login';
        }
        return Promise.reject(error);
    }
);

export default apiClient;