import axios from 'axios';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor - add auth token if available
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors and token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't retried yet, try to refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Don't try to refresh if the failed request was the refresh endpoint itself
      if (originalRequest.url?.includes('/auth/refresh')) {
        localStorage.removeItem('authToken');
        return Promise.reject(error);
      }

      try {
        // Call refresh token endpoint
        const response = await apiClient.get('/auth/refresh');
        const { accessToken } = response.data;

        // Save new token
        localStorage.setItem('authToken', accessToken);

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Refresh failed, clear token
        localStorage.removeItem('authToken');
        return Promise.reject(refreshError);
      }
    }

    // Handle other errors
    if (error.response) {
      const message = error.response.data?.message || error.message;
      return Promise.reject(new Error(message));
    } else if (error.request) {
      return Promise.reject(new Error('Network error: No response from server'));
    } else {
      return Promise.reject(error);
    }
  }
);
