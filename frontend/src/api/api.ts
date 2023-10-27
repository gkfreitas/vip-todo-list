import axios from 'axios';

type AuthData = {
  email: string,
  password: string
};

type DeleteType = {
  _id: string
};

type DataTask = {
  taskName: string,
  tag: string
  startDate: string
  dueDate: string
  priority: string
  description: string
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

export const requestLogin = async (endpoint: string, body: AuthData) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const deleteTask = async (body: DeleteType) => {
  const { data } = await api.delete('/task', { data: body });

  return data;
};

export const createTask = async (body: DataTask) => {
  const { taskName, tag, description, startDate, dueDate, priority } = body;
  const { data } = await api.post('/task', { taskName,
    tag,
    description,
    startDate,
    dueDate,
    priority });

  return data;
};

export const updateTask = async (body: DataTask) => {
  const { data } = await api.put('task', body);
  return data;
};

export default api;
