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
            // Only redirect if not already on the login page
            if (!window.location.pathname.startsWith('/auth/login')) {
                window.location.href = '/auth/login';
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;
