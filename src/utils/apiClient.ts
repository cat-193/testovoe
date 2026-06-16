const API_BASE_URL =
  import.meta.env.MODE === 'development'
    ? '/api'
    : 'https://corsproxy.io/?http://showroom.eis24.me/c300/api';

export const apiClient = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    return response.json();
  },
  delete: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
    });
    return response;
  },
};
