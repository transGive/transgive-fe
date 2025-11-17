import axios from 'axios';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  withCredentials: true, // Enable sending cookies with requests
});

// Helper function to get access token from Redux persist storage
const getAccessToken = (): string | null => {
  try {
    const persistedState = localStorage.getItem('persist:root');
    if (persistedState) {
      const parsed = JSON.parse(persistedState);
      if (parsed.user) {
        const userState = JSON.parse(parsed.user);
        return userState.accessToken || null;
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting access token from localStorage:', error);
    return null;
  }
};

// Request interceptor - add auth token if available
apiClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // If data is FormData, remove Content-Type to let browser set it with boundary
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
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
        // Clear access token from Redux persist storage
        try {
          const persistedState = localStorage.getItem('persist:root');
          if (persistedState) {
            const parsed = JSON.parse(persistedState);
            if (parsed.user) {
              const userState = JSON.parse(parsed.user);
              userState.accessToken = '';
              parsed.user = JSON.stringify(userState);
              localStorage.setItem('persist:root', JSON.stringify(parsed));
            }
          }
        } catch (clearError) {
          console.error('Error clearing access token in localStorage:', clearError);
        }
        return Promise.reject(error);
      }

      try {
        // Call refresh token endpoint without Authorization header
        const response = await axios.get(`${API_BASE_URL}/auth/refresh`, {
          withCredentials: true, // Send cookies (refresh token)
        });
        const { accessToken } = response.data;

        // Update the access token in Redux persist storage
        try {
          const persistedState = localStorage.getItem('persist:root');
          if (persistedState) {
            const parsed = JSON.parse(persistedState);
            if (parsed.user) {
              const userState = JSON.parse(parsed.user);
              userState.accessToken = accessToken;
              parsed.user = JSON.stringify(userState);
              localStorage.setItem('persist:root', JSON.stringify(parsed));
            }
          }
        } catch (updateError) {
          console.error('Error updating access token in localStorage:', updateError);
        }

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Refresh failed, clear user state (logout)
        try {
          const persistedState = localStorage.getItem('persist:root');
          if (persistedState) {
            const parsed = JSON.parse(persistedState);
            if (parsed.user) {
              const userState = JSON.parse(parsed.user);
              userState.accessToken = '';
              parsed.user = JSON.stringify(userState);
              localStorage.setItem('persist:root', JSON.stringify(parsed));
            }
          }
        } catch (clearError) {
          console.error('Error clearing access token in localStorage:', clearError);
        }
        return Promise.reject(refreshError);
      }
    }

    // Handle other errors
    if (error.response) {
      const message = error.response.data?.message || error.message;
      return Promise.reject(new Error(message));
    } else if (error.request) {
      // Check if it's a timeout error
      if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
        return Promise.reject(new Error('Upload timeout: File is too large or connection is too slow. Please try again or upload smaller files.'));
      }
      return Promise.reject(new Error('Network error: No response from server'));
    } else {
      return Promise.reject(error);
    }
  }
);
