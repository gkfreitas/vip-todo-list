import axios from 'axios';

type AuthType = {
  email: string,
  password: string
};

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

export const verifyToken = async () => {
  const { data } = await api.get('/task');
  return data;
};

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint: string, body: AuthType) => {
  try {
    const { data } = await api.post(endpoint, body);
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};

export default api;
